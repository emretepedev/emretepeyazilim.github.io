<template>
  <v-app>
    <div class="h-full bg-dark-gray">
      <Header />
      <Nuxt />
      <Footer />
    </div>
  </v-app>
</template>

<script>
  import { defineComponent } from '@nuxtjs/composition-api'
  import Footer from '~/components/Footer.vue'
  import Header from '~/components/Header.vue'

  export default defineComponent({
    // components
    components: { Footer, Header },
  })
</script>
