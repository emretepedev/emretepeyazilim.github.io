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
                                    height="150"
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
                    <v-card class="overflow-y-auto" outlined ripple>
                        <v-card-title>
                            <v-icon class="mr-5">
                                {{ mdiPoll }}
                            </v-icon>
                        </v-card-title>
                        <v-card-subtitle class="text-center">
                            <div class="text-caption grey--text text-uppercase">
                                <strong>GitHub</strong> contributions in the
                                last <strong>30 days</strong> (<strong
                                    >exclude GitLab etc.</strong
                                >)
                            </div>
                        </v-card-subtitle>
                        <v-sheet color="transparent">
                            <v-sparkline
                                :value="contributionCount"
                                :gradient="['#f72047', '#ffd200', '#1feaea']"
                                :smooth="10"
                                :padding="8"
                                :line-width="1"
                                stroke-linecap="round"
                                gradient-direction="top"
                                :fill="false"
                                type="trend"
                                auto-draw
                                :show-labels="true"
                                :auto-line-width="false"
                                :auto-draw-duration="5000"
                            >
                            </v-sparkline>
                        </v-sheet>
                    </v-card>
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
import {
    defineComponent,
    useMeta,
    onMounted,
    useContext,
    ref,
} from '@nuxtjs/composition-api'

import { mdiPoll } from '@mdi/js'

export default defineComponent({
    head: {},

    setup() {
        useMeta({ title: 'Homepage | ' })

        const { $config } = useContext()

        const contributionCount = ref([])

        const from = new Date()
        const to = new Date()
        from.setDate(to.getDate() - 30)

        onMounted(() => {
            const headers = {
                Authorization: `bearer ${$config.githubPersonalAccessToken}`,
            }

            const body = {
                query: `
                    query {
                        user(login: "emretepedev") {
                            contributionsCollection(from: "${from.toISOString()}" to: "${to.toISOString()}") {
                                contributionCalendar {
                                    weeks {
                                        contributionDays {
                                            contributionCount
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
            }

            fetch('https://api.github.com/graphql', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: headers,
            }).then((response) => {
                response.json().then((data) => {
                    data.data.user.contributionsCollection.contributionCalendar.weeks.map(
                        (week) => {
                            week.contributionDays.map((day) => {
                                contributionCount.value.push(
                                    day.contributionCount
                                )
                            })
                        }
                    )
                })
            })
        })

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
            contributionCount,
            mdiPoll,
        }
    },
})
</script>

<style></style>
