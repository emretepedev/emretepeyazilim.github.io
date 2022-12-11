import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from 'vue'
import { longClickDirective } from 'vue-long-click'

export default defineNuxtPlugin(({ $config }) => {
  const longClickInstance = longClickDirective({ delay: 1000, interval: 10000 })
  Vue.directive('longclick', longClickInstance)
})
