<template>
  <div>
    <div class="mt-12 flex justify-center">
      <v-container>
        <Project :projects="data.projects" />
      </v-container>
    </div>
  </div>
</template>

<script>
  import { defineComponent, useMeta } from '@nuxtjs/composition-api'
  import data from '~/data/pages/projects'
  import Project from '~/components/Project.vue'

  export default defineComponent({
    // components
    components: { Project },

    // setup
    setup() {
      // meta
      useMeta({ title: 'Projects | ' })

      // return
      return {
        data,
      }
    },

    // head
    head: {},
  })
</script>
