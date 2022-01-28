<template>
    <div>
        <div class="flex justify-center mt-12">
            <v-container>
                <validation-observer ref="observer" v-slot="{ invalid }">
                    <form
                        :action="$config.pageclipActionUrl"
                        @submit.prevent="onSubmit"
                        class="pageclip-form"
                        method="POST"
                    >
                        <validation-provider
                            v-slot="{ errors }"
                            name="name"
                            rules="required|min:2|max:30"
                        >
                            <v-text-field
                                v-model="name"
                                :counter="30"
                                :error-messages="errors"
                                label="Name*"
                                name="name"
                                :prepend-inner-icon="mdiFormTextbox"
                            ></v-text-field>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="email"
                            :rules="{
                                required: true,
                                min: 5,
                                max: 30,
                                regex: /^[a-zA-Z0-9_\-.+]+@[a-zA-Z0-9]+.[a-zA-Z]+/,
                                is_not: 'emretepedev@gmail.com',
                            }"
                        >
                            <v-text-field
                                v-model="email"
                                :counter="30"
                                :error-messages="errors"
                                label="E-mail*"
                                name="email"
                                :prepend-inner-icon="mdiAt"
                            ></v-text-field>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="subject"
                            :rules="`required|oneOf:${items}`"
                        >
                            <v-select
                                v-model="subject"
                                :items="items"
                                :error-messages="errors"
                                label="Subject*"
                                name="subject"
                                :prepend-inner-icon="mdiFormSelect"
                            ></v-select>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="phone"
                            rules="integer|min:7|max:20"
                        >
                            <v-text-field
                                v-model="phone"
                                :counter="20"
                                :error-messages="errors"
                                label="Phone"
                                name="phone"
                                :prepend-inner-icon="mdiPhone"
                            ></v-text-field>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="message"
                            rules="required|min:10|max:1000"
                        >
                            <v-textarea
                                v-model="message"
                                :counter="1000"
                                :error-messages="errors"
                                label="Message*"
                                name="message"
                                clearable
                                :clear-icon="mdiCloseCircle"
                                :prepend-inner-icon="mdiComment"
                            ></v-textarea>
                        </validation-provider>
                        <v-checkbox
                            v-model="asap"
                            :value="Boolean(asap)"
                            :label="`ASAP: ${Boolean(asap)}`"
                            type="checkbox"
                            name="asap"
                        ></v-checkbox>
                        <recaptcha
                            @error="onError"
                            @success="onSuccess"
                            @expired="onExpired"
                        />
                        <div class="text-center mt-5">
                            <v-btn
                                class="pageclip-form__submit"
                                type="submit"
                                :disabled="invalid || !isRecaptched"
                                @click="submit"
                            >
                                Submit
                            </v-btn>
                        </div>
                    </form>
                </validation-observer>
            </v-container>
        </div>
    </div>
</template>

<script>
import {
    defineComponent,
    ref,
    useMeta,
    onMounted,
} from '@nuxtjs/composition-api'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import {
    mdiCloseCircle,
    mdiComment,
    mdiFormSelect,
    mdiPhone,
    mdiAt,
    mdiFormTextbox,
} from '@mdi/js'

export default defineComponent({
    head: {},

    components: {
        ValidationProvider,
        ValidationObserver,
    },

    setup(_, context) {
        //meta
        useMeta({
            title: 'Contact | ',
            script: [
                {
                    charset: 'utf-8',
                    src: 'https://s.pageclip.co/v1/pageclip.js',
                    defer: true,
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

        // root variables
        const recaptcha = context.root.$recaptcha
        const vToastify = context.root.$vToastify

        // refs
        const observer = ref(null)

        // consts
        const name = ref('')
        const phone = ref('')
        const email = ref('')
        const subject = ref(null)
        const message = ref('')
        const asap = ref(false)
        const isRecaptched = ref(false)

        // hooks

        onMounted(() => {
            styleToRecaptcha()
        })

        // methods
        const submit = async (event) => {
            try {
                await observer.value.validate().then((result) => {
                    if (!result) {
                        throw new Error('Form Validation: Failed.')
                    }
                })

                await recaptcha.getResponse().catch(() => {
                    throw new Error('reCAPTCHA Verification: Token not found.')
                })

                await recaptcha.reset()

                vToastify.info('Mail sent successfully.')
            } catch (error) {
                vToastify.error(String(error))

                event.preventDefault()
            }
        }

        const onSubmit = () => {
            // @TODO: cozulecek
            // resetForm()
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
            vToastify.error('reCAPTCHA Verification: Error.')
            isRecaptched.value = false
        }

        const onSuccess = () => {
            vToastify.success('reCAPTCHA Verification: Success.')
            isRecaptched.value = true
        }

        const onExpired = () => {
            vToastify.warning('reCAPTCHA Verification: Expired.')
            isRecaptched.value = false
        }

        const styleToRecaptcha = () => {
            const _recaptcha = document.querySelector('.g-recaptcha')
            _recaptcha.style.display = 'flex'
            _recaptcha.style.justifyContent = 'center'
        }

        // return to template
        return {
            name,
            phone,
            email,
            subject,
            message,
            asap,
            items: ['Proposal', 'Hire', 'Suggestion', 'Other'],
            observer,
            isRecaptched,
            submit,
            onSubmit,
            onError,
            onSuccess,
            onExpired,
            mdiCloseCircle,
            mdiComment,
            mdiFormSelect,
            mdiPhone,
            mdiAt,
            mdiFormTextbox,
        }
    },
})
</script>

<style scoped>
.g-recaptcha {
    display: flex !important;
    justify-content: center !important;
    transform: scale(0.77);
    -webkit-transform: scale(0.77);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
}
</style>
