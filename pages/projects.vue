<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <v-row>
          <v-col v-for="project in data.projects" :key="project.name">
            <Project :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import data from '~/data/projects/projects.json'

export default defineComponent({
  setup() {
    // meta
    useMeta({ title: 'Projects | ' })

    // return
    return {
      data,
    }
  },

  head: {},
})
</script>

<style></style>
