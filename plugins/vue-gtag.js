import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default defineNuxtPlugin(({ $config }) =>
  // all options https://matteo-gabriele.gitbook.io/vue-gtag/plugin-options
  Vue.use(VueGtag, {
    enabled: true,
    bootstrap: true,
    pageTrackerEnabled: true,
    config: {
      id: $config.googleAnalytics4Id,
      params: {
        send_page_view: true,
      },
    },
    deferScriptLoad: true,
  })
)
