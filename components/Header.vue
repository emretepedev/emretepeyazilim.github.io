<template>
    <div>
        <v-app-bar
            v-if="$vuetify.breakpoint.mdAndDown"
            app
            clipped-left
            class="h-12"
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>{{ $config.spaName }}</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            :permanent="!$vuetify.breakpoint.mdAndDown"
            :expand-on-hover="!$vuetify.breakpoint.mdAndDown"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>{{ $config.spaName }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list v-if="$vuetify.breakpoint.mdAndDown">
                <v-list-item class="px-2">
                    <v-icon @click.stop="drawer = !drawer">
                        {{ mdiClose }}
                    </v-icon>
                </v-list-item>
            </v-list>
            <v-list nav dense>
                <div active-class="red" v-for="page in pages" :key="page.title">
                    <nuxt-link :to="page.to">
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>{{ page.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                {{ page.title }}
                            </v-list-item-title>
                        </v-list-item>
                    </nuxt-link>
                </div>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

import {
    mdiXml,
    mdiSourceRepositoryMultiple,
    mdiFileAccount,
    mdiCardAccountMail,
    mdiCoffee,
    mdiClose,
} from '@mdi/js'

export default defineComponent({
    setup() {
        return {
            drawer: ref(null),
            pages: [
                { title: 'Home', to: '/', icon: mdiXml },
                {
                    title: 'Projects',
                    to: '/projects',
                    icon: mdiSourceRepositoryMultiple,
                },
                { title: 'CV', to: '/cv', icon: mdiFileAccount },
                { title: 'Contact', to: '/contact', icon: mdiCardAccountMail },
                { title: 'Coffee', to: '/coffee-with-crypto', icon: mdiCoffee },
            ],
            mdiClose,
        }
    },
})
</script>

<style></style>
