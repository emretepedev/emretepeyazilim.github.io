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
          <Sparkline
            :graph-data="graphData"
            :gradients="data.sparkline.gradients"
          />
        </div>
        <div>
          <Project :projects="data.projects" />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useMeta } from '@nuxtjs/composition-api'

import data from '~/data/index/index.json'
import contributionsCount from '~/data/index/contributionsCount.json'
import Sparkline from '~/components/Sparkline.vue'
import Project from '~/components/Project.vue'

export default defineComponent({
  // components
  components: { Sparkline, Project },

  // setup
  setup() {
    // meta
    useMeta({
      meta: [
        {
          name: 'google-site-verification',
          content: 'd4yezmSdB2cAwtSSzAyPg7B3u9JidcIhNUVs-HI-w_0',
        },
      ],
    })

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
      data,
      graphData,
    }
  },

  // head
  head: {},
})
</script>
