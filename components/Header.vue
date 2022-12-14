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
        <span> {{ $config.spaName }} </span>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="z-max"
      clipped
      :expand-on-hover="!$vuetify.breakpoint.mdAndDown"
      :permanent="!$vuetify.breakpoint.mdAndDown"
      :right="isOnRight"
      width="196"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <span class="flex justify-between">
              <v-icon
                v-if="$vuetify.breakpoint.mdAndDown"
                @click.stop="drawer = !drawer"
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
      <v-list dense nav shaped>
        <NuxtLink
          v-for="(page, index) in data.pages"
          :key="index"
          :to="page.to"
        >
          <v-list-item
            :class="activePath === page.to ? 'bg-dark-gray' : ''"
            link
          >
            <v-list-item-icon class="mr-2">
              <v-icon>{{ page.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ page.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
        <a
          class="absolute bottom-2 left-0 w-full px-2"
          :href="otherWebsiteVersion.to"
          target="_blank"
        >
          <v-list-item link>
            <v-list-item-icon class="mr-2">
              <v-icon>{{ otherWebsiteVersion.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ otherWebsiteVersion.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import {
    computed,
    defineComponent,
    onMounted,
    ref,
    useContext,
    useRoute,
  } from '@nuxtjs/composition-api'
  import {
    mdiClose,
    mdiSwapHorizontal,
    mdiTestTube,
    mdiTestTubeOff,
  } from '@mdi/js'
  import data from '~/data/components/header'

  export default defineComponent({
    setup() {
      const { $config } = useContext()
      const route = useRoute()
      const { testWebsite } = $config
      const isOnRight = ref(false)
      const drawer = ref(false)

      const otherWebsiteVersion = computed(() =>
        testWebsite
          ? {
              title: '~/live-version',
              to: window.location.origin,
              icon: mdiTestTubeOff,
            }
          : {
              title: '~/dev-version',
              to: '/develop',
              icon: mdiTestTube,
            }
      )
      const activePath = computed(() => route.value.path)

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
        testWebsite,
        toggleNavDrawer,
        otherWebsiteVersion,
        activePath,
        mdiClose,
        mdiSwapHorizontal,
        mdiTestTube,
        mdiTestTubeOff,
      }
    },
  })
</script>
