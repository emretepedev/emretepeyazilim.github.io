<template>
  <div>
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndDown"
      app
      class="h-12"
      clipped-left
    >
      <v-toolbar-title class="flex items-center justify-between">
        <v-app-bar-nav-icon
          @click.stop="drawer = !Boolean(drawer)"
        ></v-app-bar-nav-icon>
        <span>
          {{ $config.spaName }}
        </span>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      :expand-on-hover="!$vuetify.breakpoint.mdAndDown"
      :permanent="!$vuetify.breakpoint.mdAndDown"
      :right="isOnRight"
      style="z-index: 99999 !important"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-icon
              v-if="$vuetify.breakpoint.mdAndDown"
              @click.stop="drawer = !Boolean(drawer)"
            >
              {{ mdiClose }}
            </v-icon>
            <span
              v-if="!$vuetify.breakpoint.mdAndDown"
              class="flex justify-between"
            >
              {{ $config.spaName }}
            </span>
            <v-icon @click="toggleNavDrawer()">
              {{ mdiSwapHorizontal }}
            </v-icon>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list active-class="text--red" dense nav>
        <nuxt-link v-for="page in data.pages" :key="page.title" :to="page.to">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ page.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ page.title }}
            </v-list-item-title>
          </v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
  import { mdiClose, mdiSwapHorizontal } from '@mdi/js'
  import data from '~/data/components/header'

  export default defineComponent({
    // setup
    setup() {
      // constants
      const isOnRight = ref(false)

      // hooks
      onMounted(() => {
        isOnRight.value = Boolean(
          JSON.parse(window.localStorage.getItem('isOnRight'))
        )
      })

      const toggleNavDrawer = () => {
        isOnRight.value = !isOnRight.value
        localStorage.setItem('isOnRight', isOnRight.value)
      }

      // return
      return {
        data,
        drawer: false,
        isOnRight,
        mdiClose,
        mdiSwapHorizontal,
        toggleNavDrawer,
      }
    },
  })
</script>
