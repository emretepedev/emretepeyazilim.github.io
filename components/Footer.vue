<template>
  <v-container>
    <v-divider></v-divider>
    <v-footer padless>
      <v-card flat tile ripple class="white--text text-center w-full">
        <v-card-text>
          <v-btn
            v-for="social in socials"
            :key="social.href"
            class="mx-4 white--text"
            icon
            :href="social.href"
            target="_blank"
          >
            <v-icon
              :x-large="!$vuetify.breakpoint.mdAndDown"
              :color="social.color"
            >
              {{ social.image }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          This website made with <strong>Vue</strong> (JavaScript Framework),
          <strong>Tailwind</strong> (CSS Framework),
          <strong>Vuetify</strong> (UI Framework), <strong>Nuxt</strong> (Meta
          Framework based on Vue) and
          <strong>Material Design Icons</strong> (Icon Pack) on
          <strong>GH Pages</strong>.
        </v-card-text>
        <v-card-subtitle>
          Last Modified At: {{ lastModifiedAt }}
        </v-card-subtitle>
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
import { defineComponent, useContext } from '@nuxtjs/composition-api'

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
  mdiGitlab,
  mdiEmail,
  mdiPhone,
} from '@mdi/js'

export default defineComponent({
  setup() {
    // context
    const { $config } = useContext()

    // consts
    const lastModifiedAt = $config.lastModifiedAt

    // return
    return {
      socials: [
        {
          href: 'https://github.com/emretepedev',
          image: mdiGithub,
          color: '#181717',
        },
        {
          href: 'https://gitlab.com/emretepedev',
          image: mdiGitlab,
          color: '#FCA121',
        },
        {
          href: 'https://linkedin.com/in/emretepedev',
          image: mdiLinkedin,
          color: '#0A66C2',
        },
        {
          href: 'https://twitter.com/emretepedev',
          image: mdiTwitter,
          color: '#1DA1F2',
        },
        {
          href: 'https://instagram.com/emretepedev',
          image: mdiInstagram,
          color: '#E4405F',
        },
        {
          href: 'https://facebook.com/emretepedev',
          image: mdiFacebook,
          color: '#1877F2',
        },
        {
          href: 'https://telegram.me/emretepedev',
          image: mdiSend,
          color: '#26A5E4',
        },
        {
          href: 'https://api.whatsapp.com/send?phone=905522801804&text=Hi%20@emretepedev.',
          image: mdiWhatsapp,
          color: '#25D366',
        },
        {
          href: 'https://discordapp.com/users/365827212890341378',
          image: mdiDiscord,
          color: '#5865F2',
        },
        {
          href: 'skype:live:.cid.ebf04f9e644e1570',
          image: mdiSkype,
          color: '#00AFF0',
        },
        {
          href: 'mailto:emretepedev@gmail.com',
          image: mdiEmail,
          color: '#FFFFFF',
        },
        {
          href: 'tel:+905522801804',
          image: mdiPhone,
          color: '#FFFFFF',
        },
      ],
      lastModifiedAt,
    }
  },
})
</script>

<style></style>
