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

export default defineComponent({
    head: {},

    setup() {
        // meta
        useMeta({ title: 'Projects | ' })

        // return
        return {
            projects: [
                {
                    name: 'LandIndex',
                    description:
                        'LandIndex provides digital land prices and analytics. Land investing basics, guides and resources. Check out Metaverse land prices.',
                    href: 'https://landindex.io',
                    image: 'https://landindex.io/images/logoWithText.svg',
                },
                {
                    name: '/dev/null',
                    description: '/dev/random',
                    href: '#',
                    image: '/images/dev-null.png',
                },
            ],
        }
    },
})
</script>

<style></style>
