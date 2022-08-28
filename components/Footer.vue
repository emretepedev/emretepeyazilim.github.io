<template>
  <v-container>
    <v-divider></v-divider>
    <v-footer padless>
      <v-card class="white--text w-full text-center" flat ripple tile>
        <v-card-text>
          <v-btn
            v-for="social in data.socials"
            :key="social.href"
            class="white--text mx-4"
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
        <v-card-text class="white--text pt-0">
          This website made with <strong>Vue</strong>, <strong>Vuetify</strong>,
          <strong>Nuxt</strong>, <strong>Tailwind</strong> and
          <strong>Material Design Icons</strong> on
          <a class="text-white" :href="$config.repositoryUrl" target="_blank"
            ><strong>GH Pages</strong></a
          >.
        </v-card-text>
        <v-card-subtitle>
          Last modified at: {{ $config.lastModifiedAt }}
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
  import { defineComponent } from '@nuxtjs/composition-api'
  import data from '~/data/components/footer'

  export default defineComponent({
    // setup
    setup() {
      // return
      return {
        data,
      }
    },
  })
</script>
