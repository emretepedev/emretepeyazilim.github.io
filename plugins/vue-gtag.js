import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default function ({ app }) {
    // to access all options https://matteo-gabriele.gitbook.io/vue-gtag/plugin-options
    Vue.use(VueGtag, {
        enabled: true,
        bootstrap: true,
        pageTrackerEnabled: true,
        config: {
            id: app.$config.googleAnalytics4Id,
            params: {
                send_page_view: true,
            },
        },
        deferScriptLoad: true,
    })
}
