<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <ValidationObserver ref="observer" v-slot="{ invalid }">
          <v-form
            :action="$config.pageclipActionUrl"
            class="pageclip-form"
            method="POST"
          >
            <ValidationProvider
              v-slot="{ errors }"
              name="name"
              rules="required|min:2|max:30"
            >
              <v-text-field
                v-model="name"
                :counter="30"
                :error-messages="errors"
                :success="!Boolean(Object.keys(errors).length) && Boolean(name)"
                label="Name*"
                placeholder="Your name"
                :hint="!Boolean(name) ? 'For example, `John Doe`' : ''"
                name="name"
                :prepend-inner-icon="mdiFormTextbox"
                outlined
                rounded
                dense
                shaped
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="email"
              :rules="{
                required: true,
                email: true,
                min: 5,
                max: 30,
                is_not: 'emretepedev@gmail.com',
              }"
            >
              <v-text-field
                v-model="email"
                :counter="30"
                :error-messages="errors"
                :success="
                  !Boolean(Object.keys(errors).length) && Boolean(email)
                "
                label="E-mail*"
                placeholder="Your mail address"
                :hint="!Boolean(email) ? 'For example, `mail@example.com`' : ''"
                name="email"
                :prepend-inner-icon="mdiAt"
                outlined
                rounded
                dense
                shaped
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="subject"
              :rules="`required|oneOf:${data.subjects}`"
            >
              <v-autocomplete
                v-model="subject"
                :items="data.subjects"
                :error-messages="errors"
                :success="
                  !Boolean(Object.keys(errors).length) && Boolean(subject)
                "
                label="Subject*"
                placeholder="Your subject"
                :hint="!Boolean(subject) ? 'For example, `Proposal`' : ''"
                name="subject"
                :prepend-inner-icon="mdiFormSelect"
                outlined
                rounded
                dense
                shaped
              ></v-autocomplete>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="phone"
              rules="integer|min:7|max:20"
            >
              <v-text-field
                v-model="phone"
                :counter="20"
                :error-messages="errors"
                :success="
                  !Boolean(Object.keys(errors).length) && Boolean(phone)
                "
                label="Phone"
                placeholder="Your phone"
                :hint="!Boolean(phone) ? 'For example, `123456789`' : ''"
                name="phone"
                :prepend-inner-icon="mdiPhone"
                outlined
                rounded
                dense
                shaped
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="message"
              rules="required|min:10|max:1000"
            >
              <v-textarea
                v-model="message"
                :counter="1000"
                :error-messages="errors"
                :success="
                  !Boolean(Object.keys(errors).length) && Boolean(message)
                "
                label="Message*"
                placeholder="Your message"
                :hint="
                  !Boolean(message) ? 'For example, `Hi @emretepedev!`' : ''
                "
                name="message"
                clearable
                :clear-icon="mdiCloseCircle"
                :prepend-inner-icon="mdiComment"
                maxlength="1000"
                outlined
                auto-grow
                rounded
                dense
                shaped
              ></v-textarea>
            </ValidationProvider>
            <v-checkbox
              v-model="asap"
              :value="asap"
              :false-value="false"
              :label="`ASAP: ${asap ? 'yes' : 'no'}`"
              name="asap"
              :off-icon="mdiCheckboxBlankCircleOutline"
              :on-icon="mdiCheckboxMarkedCircle"
              dense
              shaped
            ></v-checkbox>
            <recaptcha
              :id="$config.googleRecaptchaV2Size"
              :site-key="$config.googleRecaptchaV2SiteKey"
              @error="onError"
              @success="onSuccess"
              @expired="onExpired"
            />

            <div class="mt-5 text-center">
              <v-btn
                class="pageclip-form__submit pageclip-form__submit--dark-loader"
                type="submit"
                :disabled="invalid || !passRecaptcha"
                @click="submit"
              >
                Submit
              </v-btn>
            </div>
          </v-form>
        </ValidationObserver>
      </v-container>
    </div>
  </div>
</template>

<script>
  import {
    defineComponent,
    ref,
    useMeta,
    useContext,
    onMounted,
  } from '@nuxtjs/composition-api'

  import {
    mdiCloseCircle,
    mdiComment,
    mdiFormSelect,
    mdiPhone,
    mdiAt,
    mdiFormTextbox,
    mdiCheckboxBlankCircleOutline,
    mdiCheckboxMarkedCircle,
  } from '@mdi/js'

  import { ValidationObserver, ValidationProvider } from 'vee-validate'
  import data from '~/data/pages/contact'

  export default defineComponent({
    // components
    components: {
      ValidationProvider,
      ValidationObserver,
    },

    // setup
    setup(_, { root }) {
      // meta
      useMeta({
        title: 'Contact | ',
        script: [
          {
            charset: 'utf-8',
            src: 'https://s.pageclip.co/v1/pageclip.js',
            body: true,
            defer: true,
            callback: () => {
              styleToPageclip()
            },
          },
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://s.pageclip.co/v1/pageclip.css',
            media: 'screen',
          },
        ],
      })

      // context
      const { $config, $recaptcha } = useContext()

      // root variables
      const $vToastify = root.$vToastify

      // refs
      const observer = ref(null)

      // constants
      const name = ref('')
      const phone = ref('')
      const email = ref('')
      const subject = ref(null)
      const message = ref('')
      const asap = ref(false)
      const passRecaptcha = ref(false)
      const widgetId = ref(0)

      // hooks
      onMounted(async () => {
        await $recaptcha.init()

        widgetId.value = $recaptcha.render($config.googleRecaptchaV2Size, {
          sitekey: $config.googleRecaptchaV2SiteKey,
        })

        styleToRecaptcha()
      })

      // methods
      const submit = async (event) => {
        try {
          const validate = await observer.value.validate()

          if (!validate) {
            throw new Error('Form Validation: Failed.')
          }

          await $recaptcha.getResponse(widgetId.value).catch(() => {
            throw new Error('reCAPTCHA v2 Verification: Token not found.')
          })

          await $recaptcha.execute('login').catch(() => {
            throw new Error('reCAPTCHA v3 Verification: Token not found.')
          })

          await $recaptcha.reset(widgetId.value)
        } catch (error) {
          $vToastify.error(String(error))

          event.preventDefault()
        }
      }

      const resetForm = () => {
        name.value = ''
        phone.value = ''
        email.value = ''
        subject.value = null
        message.value = ''
        asap.value = false
        observer.value.reset()
      }

      const onError = () => {
        $vToastify.error('reCAPTCHA Verification: Error.')
        passRecaptcha.value = false
      }

      const onSuccess = () => {
        $vToastify.success('reCAPTCHA Verification: Success.')
        passRecaptcha.value = true
      }

      const onExpired = () => {
        $vToastify.warning('reCAPTCHA Verification: Expired.')
        passRecaptcha.value = false
      }

      const onResponse = (error, response) => {
        if (error) {
          $vToastify.error("Mail didn't send because of `Form has errors`.")

          return
        }

        if (response.data !== 'ok') {
          $vToastify.error(
            "Mail didn't send because of `Server Error`. Try again later."
          )

          return
        }

        resetForm()

        $vToastify.success('Mail sent successfully.')
      }

      const styleToRecaptcha = () => {
        let count = 0
        const frequency = 1000 / 4 // 0.25 sec
        const maxTime = (1000 / frequency) * 10 // 10 sec

        const interval = setInterval(() => {
          const _recaptcha = document.querySelector('.g-recaptcha')

          if (Boolean(_recaptcha) || count === maxTime) {
            clearInterval(interval)

            if (count === maxTime) {
              $vToastify.error(
                'reCAPTCHA Verification: Server Error. Try again later.'
              )

              return
            }

            _recaptcha.style.display = 'flex'
            _recaptcha.style.justifyContent = 'center'
          }

          count++
        }, frequency)
      }

      const styleToPageclip = () => {
        const form = document.querySelector('.pageclip-form')

        /* eslint-disable-next-line */
        Pageclip.form(form, {
          onResponse(error, response) {
            onResponse(error, response)
          },
          successTemplate: 'I`ll reply to you ASAP. - @emretepedev',
        })
      }

      // return
      return {
        name,
        phone,
        email,
        subject,
        message,
        asap,
        data,
        observer,
        passRecaptcha,
        submit,
        onError,
        onSuccess,
        onExpired,
        mdiCloseCircle,
        mdiComment,
        mdiFormSelect,
        mdiPhone,
        mdiAt,
        mdiFormTextbox,
        mdiCheckboxBlankCircleOutline,
        mdiCheckboxMarkedCircle,
      }
    },

    // head
    head: {},
  })
</script>
