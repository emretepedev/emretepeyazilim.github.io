import Vue from "vue";
import VueToastify from "vue-toastify";

Vue.use(VueToastify, {
  customNotifications: {
    clientError: {
      canTimeout: false,
      errorDuration: false,
      theme: "~/assets/css/custom-toastify.scss",
    }
  }
});