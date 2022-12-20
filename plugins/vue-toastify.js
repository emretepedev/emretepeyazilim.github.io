import Vue from 'vue'
import VueToastify from 'vue-toastify'

export default () =>
  // all options https://github.com/nandi95/vue-toastify#available-settings
  Vue.use(VueToastify, {
    maxToasts: 3,
    position: 'top-right',
  })
