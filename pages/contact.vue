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
                            name="Name"
                            rules="required|max:10"
                        >
                            <v-text-field
                                v-model="name"
                                :counter="10"
                                :error-messages="errors"
                                label="Name"
                                name="name"
                            ></v-text-field>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="phoneNumber"
                            :rules="{
                                required: true,
                            }"
                        >
                            <v-text-field
                                v-model="phoneNumber"
                                :counter="7"
                                :error-messages="errors"
                                label="Phone Number"
                                name="phoneNumber"
                            ></v-text-field>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="email"
                            rules="required|email"
                        >
                            <v-text-field
                                v-model="email"
                                :error-messages="errors"
                                label="E-mail"
                                name="email"
                            ></v-text-field>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="select"
                            rules="required"
                        >
                            <v-select
                                v-model="select"
                                :items="items"
                                :error-messages="errors"
                                label="Select"
                                name="select"
                            ></v-select>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            rules="required"
                            name="checkbox"
                        >
                            <v-checkbox
                                v-model="checkbox"
                                :error-messages="errors"
                                value="1"
                                label="Option"
                                type="checkbox"
                                name="checkbox"
                            ></v-checkbox>
                        </validation-provider>

                        <recaptcha
                            @error="onError"
                            @success="onSuccess"
                            @expired="onExpired"
                        />

                        <v-btn
                            class="mr-4 pageclip-form__submit"
                            type="submit"
                            :disabled="invalid || !isRecaptched"
                            @click="submit"
                        >
                            Submit
                        </v-btn>
                    </form>
                </validation-observer>
            </v-container>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, useMeta } from '@nuxtjs/composition-api'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

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
        const phoneNumber = ref('')
        const email = ref('')
        const select = ref(null)
        const checkbox = ref(null)
        const isRecaptched = ref(false)

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

                vToastify.info('Mail sent successfully.')
            } catch (error) {
                vToastify.error(String(error))

                event.preventDefault()
            }
        }

        const onSubmit = async () => {
            await resetForm()
        }

        const resetForm = async () => {
            await recaptcha.reset()
            name.value = ''
            phoneNumber.value = ''
            email.value = ''
            select.value = null
            checkbox.value = null
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

        // return to template
        return {
            name,
            phoneNumber,
            email,
            select,
            checkbox,
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            observer,
            isRecaptched,
            submit,
            onSubmit,
            onError,
            onSuccess,
            onExpired,
        }
    },
})
</script>

<style></style>
