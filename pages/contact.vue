<template>
    <div>
        <div class="flex justify-center mt-12">
            <v-container>
                <validation-observer
                    @submit.prevent="submit"
                    ref="observer"
                    v-slot="{ invalid }"
                >
                    <form
                        :action="$config.pageclipActionUrl"
                        class="pageclip-form"
                        method="post"
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
                                required
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
                                required
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
                                required
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
                                data-vv-name="select"
                                required
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
                                required
                                name="checkbox"
                            ></v-checkbox>
                        </validation-provider>

                        <v-btn
                            class="mr-4 pageclip-form__submit"
                            type="submit"
                            :disabled="invalid"
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

    setup() {
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

        // consts
        const observer = ref(null)
        const name = ref('')
        const phoneNumber = ref('')
        const email = ref('')
        const select = ref(null)
        const checkbox = ref(null)

        // methods
        const submit = async () => {
            observer.value.validate()
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
            submit,
        }
    },
})
</script>

<style></style>
