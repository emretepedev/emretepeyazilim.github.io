<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container class="space-y-5">
        <div class="text-center flex flex-col items-center">
          <v-row justify="center" align="center">
            <v-card class="overflow-y-auto" outlined max-height="400" ripple>
              <v-banner class="justify-center text-h5 font-weight-light" sticky>
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
                  I’m a young ambitious Web and Blockchain developer who
                  seriously cares discipline. On the other hand, I’m an
                  open-minded person to learn new stuffs about technology and
                  software. In addition to the technical matters that I care, I
                  personally take account of everything about the notion
                  “esteem”.
                </div>
              </v-card-text>
            </v-card>
          </v-row>
        </div>
        <div>
          <v-card class="overflow-y-auto" outlined ripple>
            <v-card-title>
              <v-spacer v-if="$vuetify.breakpoint.mdAndDown"></v-spacer>
              <v-icon>
                {{ mdiPoll }}
              </v-icon>
            </v-card-title>
            <v-card-subtitle class="text-center">
              <div class="text-caption grey--text text-uppercase">
                <strong>GitHub</strong> contributions in the last
                <strong>30 days</strong> (<strong>exclude</strong>
                GitLab etc.)
              </div>
            </v-card-subtitle>
            <v-sheet color="transparent">
              <v-sparkline
                :value="graphData"
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
import { defineComponent, useMeta, ref } from '@nuxtjs/composition-api'

import { mdiPoll } from '@mdi/js'
import projects from '~/data/index/projects.json'
import contributionsCount from '~/data/index/contributionsCount.json'

export default defineComponent({
  setup() {
    // meta
    useMeta({ title: 'Homepage | ' })

    // consts
    const graphData = ref([])
    const from = new Date()
    const to = new Date()

    from.setDate(to.getDate() - 30)

    contributionsCount.data.user.contributionsCollection.contributionCalendar.weeks.forEach(
      (week) => {
        week.contributionDays.forEach((day) => {
          graphData.value.push(day.contributionCount)
        })
      }
    )

    // return
    return {
      projects,
      graphData,
      mdiPoll,
    }
  },
  head: {},
})
</script>

<style></style>
