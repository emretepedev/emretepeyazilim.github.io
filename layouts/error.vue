<template>
  <div class="flex h-screen justify-center">
    <div class="mx-5">
      <div class="mt-40 mb-10 md:flex">
        <div class="error-text flex items-center text-center font-black">
          404
        </div>
        <h2 class="mx-5 hidden border-l-4 border-logo-green md:block"></h2>
        <div>
          <div class="error-text flex items-center">Page not found</div>
          <div class="flex items-center text-xl">
            Please check the URL in the address bar and try again.
          </div>
        </div>
      </div>
      <NuxtLink to="/">
        <span class="text-logo-green hover:text-dark-logo-green"
          >Go back home</span
        >
        <v-btn color="green darken-2" icon text>
          <v-icon>{{ mdiArrowRightThin }}</v-icon>
        </v-btn>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  import { defineComponent, useMeta } from '@nuxtjs/composition-api'
  import { mdiArrowRightThin } from '@mdi/js'

  useMeta({
    title: 'Page not found | ',
    meta: [
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex, nofollow',
      },
    ],
  })
</script>

<script>
  export default defineComponent({
    head: {},
  })
</script>

<style scoped>
  @media (min-width: 320px) {
    .error-text {
      font-size: 40px;
    }
  }
  @media (min-width: 768px) {
    .error-text {
      font-size: 90px;
    }
  }
</style>
