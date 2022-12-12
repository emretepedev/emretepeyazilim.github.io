<template>
  <div>
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndDown"
      app
      class="h-12"
      clipped-left
    >
      <v-toolbar-title class="flex items-center justify-between">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span> {{ $config.spaName }}s </span>
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
            <span class="flex justify-between">
              <v-icon
                v-if="$vuetify.breakpoint.mdAndDown"
                @click.stop="drawer = !Boolean(drawer)"
              >
                {{ mdiClose }}
              </v-icon>
              <span v-else> {{ $config.spaName }} </span>
              <v-icon @click="toggleNavDrawer()">
                {{ mdiSwapHorizontal }}
              </v-icon>
            </span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list active-class="text--red" dense nav>
        <nuxt-link
          v-for="(page, index) in data.pages"
          :key="index"
          :to="page.to"
        >
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
    setup() {
      const isOnRight = ref(false)
      const drawer = ref(false)

      onMounted(() => {
        isOnRight.value = Boolean(
          JSON.parse(window.localStorage.getItem('isOnRight'))
        )
      })

      const toggleNavDrawer = () => {
        isOnRight.value = !isOnRight.value
        localStorage.setItem('isOnRight', isOnRight.value)
      }

      return {
        data,
        drawer,
        isOnRight,
        mdiClose,
        mdiSwapHorizontal,
        toggleNavDrawer,
      }
    },
  })
</script>
