import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) =>
  // all options https://matteo-gabriele.gitbook.io/vue-gtag/plugin-options
  nuxtApp.vueApp.use(VueGtag, {
    enabled: true,
    bootstrap: true,
    pageTrackerEnabled: true,
    config: {
      id: nuxtApp.nuxt2Context.$config.public.googleAnalytics4Id,
      params: {
        send_page_view: true,
      },
    },
    deferScriptLoad: true,
  })
)
