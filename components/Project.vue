<template>
  <v-row>
    <v-col v-for="project in projects" :key="project.name">
      <v-hover>
        <template #default="{ hover }">
          <v-card class="mx-auto" height="275" max-width="344" outlined shaped>
            <v-img
              :alt="project.name"
              height="128"
              :src="project.image"
              :title="project.name"
            >
            </v-img>
            <v-card-title class="pb-1">
              {{ project.name }}
            </v-card-title>
            <v-card-text>
              {{ project.description }}
            </v-card-text>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="teal">
                <v-btn :href="project.href" target="_blank">
                  Open in new tab
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
  import { defineComponent } from '@nuxtjs/composition-api'

  export default defineComponent({
    // props
    props: {
      projects: {
        type: Array,
        default() {
          return []
        },
        required: true,
      },
    },
  })
</script>
