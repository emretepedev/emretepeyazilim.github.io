<template>
  <v-app>
    <div class="bg-dark-gray h-full">
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
