<template>
  <v-container>
    <v-divider></v-divider>
    <v-footer padless>
      <v-card class="w-full text-center text-white" flat ripple tile>
        <v-card-text>
          <v-btn
            v-for="(social, index) in socials"
            :key="index"
            class="mx-4 text-white"
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
        <v-card-text v-if="false" class="pt-0 text-white">
          This website is made with <strong>Vue</strong>,
          <strong>Vuetify</strong>, <strong>Nuxt</strong>,
          <strong>Tailwind</strong> and
          <strong>Material Design Icons</strong> and deployed on
          <a
            class="text-white"
            :href="$config.public.repositoryUrl"
            target="_blank"
            ><strong>GH Pages</strong></a
          >.
        </v-card-text>
        <v-card-subtitle>
          Last modified at: {{ $config.public.lastModifiedAt }}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-text class="text-white">
          {{ new Date().getFullYear() }} —
          <strong>{{ $config.public.spaName }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script setup lang="ts">
  import { socials } from '@/data/components/footer'
</script>
