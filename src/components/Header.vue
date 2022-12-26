<template>
  <div>
    <v-app-bar v-if="$vuetify.breakpoint.mdAndDown" app dense hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="toggleNavDrawer()"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        {{ $config.public.spaName }}
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="z-max"
      clipped
      :expand-on-hover="!$vuetify.breakpoint.mdAndDown"
      height="100%"
      :permanent="!$vuetify.breakpoint.mdAndDown"
      :right="isOnRight"
      width="196"
    >
      <div class="flex justify-between px-4">
        <v-list-item-icon
          v-if="$vuetify.breakpoint.mdAndDown"
          class="mx-0"
          @click.stop="toggleNavDrawer()"
        >
          <v-icon dense>
            {{ mdiClose }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-icon @click="toggleSideNavDrawer()">
          <v-icon dense>
            {{ mdiSwapHorizontal }}
          </v-icon>
        </v-list-item-icon>
      </div>
      <v-divider class="mb-2 px-0"></v-divider>
      <v-list dense nav rounded shaped>
        <v-list-item
          v-for="(page, index) in pages"
          :key="index"
          :class="
            (isLastItem =
              index === pages.length - 1
                ? 'absolute bottom-2 left-2 right-2 w-[calc(100%-16px)]'
                : '')
          "
          :href="isLastItem ? page.to : ''"
          :target="isLastItem ? page.target : ''"
          :to="isLastItem ? '' : page.to"
        >
          <v-list-item-icon class="mx-0">
            <v-icon dense left>{{ page.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ page.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
  import {
    mdiClose,
    mdiSwapHorizontal,
    mdiTestTube,
    mdiTestTubeOff,
  } from '@mdi/js'
  import { pages } from '@/data/components/header'

  const { spaOrigin } = useRuntimeConfig().public
  const isOnRight = ref(false)
  const drawer = ref(false)
  const lastPageItem = pages[pages.length - 1]
  const isLastItem = ''
  if (!lastPageItem.title.includes('version'))
    pages.push(
      process.env.testWebsite === 'true'
        ? {
            title: '~/live-version',
            to: spaOrigin,
            icon: mdiTestTubeOff,
            target: '_blank',
          }
        : {
            title: '~/dev-version',
            to: '/develop',
            icon: mdiTestTube,
            target: '_blank',
          }
    )

  onMounted(() => {
    isOnRight.value = Boolean(
      JSON.parse(window.localStorage.getItem('isOnRight'))
    )
  })

  const toggleSideNavDrawer = () => {
    isOnRight.value = !isOnRight.value
    localStorage.setItem('isOnRight', String(isOnRight.value))
  }

  const toggleNavDrawer = () => {
    drawer.value = !drawer.value
  }
</script>
