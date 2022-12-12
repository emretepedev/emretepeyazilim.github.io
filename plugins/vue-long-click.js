import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from 'vue'
import { longClickDirective } from 'vue-long-click'

export default defineNuxtPlugin(() =>
  // all options https://github.com/ittus/vue-long-click#config
  Vue.directive('longclick', longClickDirective({ delay: 1500, interval: 0 }))
)
