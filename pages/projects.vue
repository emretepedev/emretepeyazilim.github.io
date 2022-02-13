<template>
    <div>
        <div class="flex justify-center mt-12">
            <v-container>
                <Project :projects="data.projects" />
            </v-container>
        </div>
    </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import data from '~/data/projects/projects.json'
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
