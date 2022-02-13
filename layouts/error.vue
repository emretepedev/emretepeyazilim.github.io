<template>
    <div class="flex justify-center h-screen">
        <div class="mx-5">
            <div class="mt-40 mb-10 md:flex">
                <div
                    class="flex items-center font-black text-center error-text"
                >
                    404
                </div>
                <h2
                    class="hidden mx-5 border-l-4 md:block border-logo-green"
                ></h2>
                <div>
                    <div class="flex items-center error-text">
                        Page not found
                    </div>
                    <div class="flex items-center text-xl">
                        Please check the URL in the address bar and try again.
                    </div>
                </div>
            </div>
            <nuxt-link to="/">
                <span class="text-logo-green hover:text-dark-logo-green"
                    >Go back home</span
                >
                <v-btn text icon color="green darken-2">
                    <v-icon>{{ mdiArrowRightThin }}</v-icon>
                </v-btn>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import { mdiArrowRightThin } from '@mdi/js'

export default defineComponent({
    // setup
    setup() {
        // meta
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

        // return
        return {
            mdiArrowRightThin,
        }
    },
    head: {},
})
</script>

<style scoped>
@media (min-width: 320px) {
    .error-text {
        font-size: 40px;
    }
}
@media (min-width: 768px) {
    .error-text {
        font-size: 90px;
    }
}
</style>
