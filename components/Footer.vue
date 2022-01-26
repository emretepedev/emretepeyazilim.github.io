<template>
    <v-container>
        <v-footer padless>
            <v-card flat tile ripple class="white--text text-center w-full">
                <v-card-text>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 white--text"
                        icon
                        :href="icon.href"
                        target="_blank"
                    >
                        <v-icon :x-large="!$vuetify.breakpoint.mdAndDown">
                            {{ icon.image }}
                        </v-icon>
                    </v-btn>
                </v-card-text>
                <v-card-text class="white--text pt-0">
                    This website made with <strong>Vue</strong> (JavaScript
                    Framework), <strong>Tailwind</strong> (CSS Framework),
                    <strong>Vuetify</strong> (UI Framework),
                    <strong>Nuxt</strong> (Meta Framework based on Vue) and
                    <strong>Material Design Icons</strong> (Icon Pack) on
                    <strong>GH Pages</strong>.
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} —
                    <strong>{{ $config.spaName }}</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-container>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import {
    mdiFacebook,
    mdiTwitter,
    mdiLinkedin,
    mdiInstagram,
    mdiSkype,
    mdiWhatsapp,
    mdiSend,
    mdiDiscord,
    mdiGithub,
    mdiEmail,
    mdiPhone,
} from '@mdi/js'

export default defineComponent({
    setup() {
        return {
            icons: [
                {
                    href: 'https://github.com/emretepedev',
                    image: mdiGithub,
                },
                {
                    href: 'https://linkedin.com/in/emretepedev',
                    image: mdiLinkedin,
                },
                {
                    href: 'https://twitter.com/emretepedev',
                    image: mdiTwitter,
                },
                {
                    href: 'https://instagram.com/emretepedev',
                    image: mdiInstagram,
                },
                {
                    href: 'https://facebook.com/emretepedev',
                    image: mdiFacebook,
                },
                {
                    href: 'https://telegram.me/emretepedev',
                    image: mdiSend,
                },
                {
                    href: 'https://discordapp.com/users/365827212890341378',
                    image: mdiDiscord,
                },
                {
                    href: 'https://api.whatsapp.com/send?phone=905522801804&text=Hi%20@emretepedev.',
                    image: mdiWhatsapp,
                },
                {
                    href: 'skype:live:.cid.ebf04f9e644e1570',
                    image: mdiSkype,
                },
                {
                    href: 'mailto:emretepedev@gmail.com',
                    image: mdiEmail,
                },
                {
                    href: 'tel:+905522801804',
                    image: mdiPhone,
                },
            ],
        }
    },
})
</script>

<style></style>
