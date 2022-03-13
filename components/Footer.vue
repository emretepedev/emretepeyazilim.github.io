<template>
  <v-container>
    <v-divider></v-divider>
    <v-footer padless>
      <v-card class="w-full text-center white--text" flat ripple tile>
        <v-card-text>
          <v-btn
            v-for="social in data.socials"
            :key="social.href"
            class="mx-4 white--text"
            :href="social.href"
            icon
            target="_blank"
          >
            <v-icon
              :color="social.color"
              :x-large="!$vuetify.breakpoint.mdAndDown"
            >
              {{ social.image }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0 white--text">
          This website made with <strong>Vue</strong> (JavaScript Framework),
          <strong>Tailwind</strong> (CSS Framework),
          <strong>Vuetify</strong> (UI Framework), <strong>Nuxt</strong> (Meta
          Framework based on Vue) and
          <strong>Material Design Icons</strong> (Icon Pack) on
          <strong>GH Pages</strong>.
        </v-card-text>
        <v-card-subtitle>
          Last modified at: {{ lastModifiedAt }}
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
  import data from '~/data/components/footer'

  export default defineComponent({
    // setup
    setup() {
      // context
      const { $config } = useContext()

      // return
      return {
        lastModifiedAt: $config.lastModifiedAt,
        data,
      }
    },
  })
</script>
