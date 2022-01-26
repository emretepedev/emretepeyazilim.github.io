<template>
    <div>
        <div class="flex justify-center mt-12">
            <v-container class="space-y-5">
                <div class="text-center flex flex-col items-center">
                    <v-row justify="center" align="center">
                        <v-card
                            class="overflow-y-auto"
                            outlined
                            max-height="400"
                            ripple
                        >
                            <v-banner
                                class="justify-center text-h5 font-weight-light"
                                sticky
                            >
                                <nuxt-img
                                    class="rounded-full inline"
                                    src="/images/avatar.jpg"
                                    width="150"
                                    title="@emretepedev"
                                    alt="@emretepedev"
                                    provider="static"
                                />
                            </v-banner>
                            <v-card-text>
                                <div>
                                    I’m a young ambitious web developer who
                                    seriously cares discipline. On the other
                                    hand, I’m an open-minded person to learn new
                                    stuffs about technology and software. In
                                    addition to the technical matters that I
                                    care, I personally take account of
                                    everything about the notion “esteem”...
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-row>
                </div>
                <div>
                    <v-row>
                        <v-col v-for="project in projects" :key="project.name">
                            <Project :project="project" />
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </div>
    </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
    head: {},
    setup() {
        useMeta({ title: 'Homepage | ' })

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
