<template>
  <v-app>
    <div class="h-full bg-dark-gray">
      <Header />
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
  import { defineComponent } from '@nuxtjs/composition-api'
  import Header from '~/components/Header.vue'

  export default defineComponent({
    // eslint-disable-next-line vue/no-reserved-component-names
    components: { Header },
  })
</script>

<style>
  /* *,
  *::after,
  *::before {
    box-sizing: border-box !important;
  } */
</style>
