import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from 'vue'
import VueToastify from 'vue-toastify'

export default defineNuxtPlugin(() => {
  Vue.use(VueToastify, {
    customNotifications: {
      clientError: {
        canTimeout: false,
        theme: '~/assets/css/custom-toastify.scss',
      },
    },
    position: 'top-right',
  })
})
