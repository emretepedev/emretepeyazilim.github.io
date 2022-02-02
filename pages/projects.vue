<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <v-row>
          <v-col v-for="project in projects" :key="project.name">
            <Project :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import projects from '~/data/projects/projects.json'

export default defineComponent({
  setup() {
    // meta
    useMeta({ title: 'Projects | ' })

    // return
    return {
      projects,
    }
  },

  head: {},
})
</script>

<style></style>
