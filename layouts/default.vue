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
  import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api'
  import Footer from '~/components/Footer.vue'
  import Header from '~/components/Header.vue'

  export default defineComponent({
    // eslint-disable-next-line vue/no-reserved-component-names
    components: { Footer, Header },

    setup() {
      const { $config } = useContext()
      const { testWebsite } = $config

      if (testWebsite) {
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
      }
    },

    head: {},
  })
</script>
