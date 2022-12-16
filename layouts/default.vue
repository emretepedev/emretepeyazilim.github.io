<template>
  <v-app>
    <div class="h-full bg-dark-gray">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </v-app>
</template>

<script setup>
  import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api'
  import Footer from '~/components/Footer.vue'
  import Header from '~/components/Header.vue'

  const { $config } = useContext()
  const { testWebsite } = $config

  if (testWebsite) {
    useMeta({
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow',
        },
      ],
    })
  }
</script>

<script>
  export default defineComponent({
    head: {},
  })
</script>
