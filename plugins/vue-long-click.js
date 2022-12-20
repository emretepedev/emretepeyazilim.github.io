import { longClickDirective } from 'vue-long-click'

export default defineNuxtPlugin((nuxtApp) =>
  // all options https://github.com/ittus/vue-long-click#config
  nuxtApp.vueApp.directive(
    'longclick',
    longClickDirective({ delay: 1500, interval: 0 })
  )
)
