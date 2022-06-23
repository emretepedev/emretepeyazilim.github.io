<template>
  <div>
    <div class="mt-12 flex justify-center">
      <v-container class="space-y-5">
        <div class="flex flex-col items-center text-center">
          <v-row align="center" justify="center">
            <v-card class="overflow-y-auto" max-height="400" outlined ripple>
              <v-banner class="text-h5 font-weight-light justify-center" sticky>
                <nuxt-img
                  alt="@emretepedev"
                  class="inline rounded-full"
                  height="150"
                  provider="static"
                  src="/images/avatar.png"
                  title="@emretepedev"
                  width="150"
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
            :gradients="data.sparkline.gradients"
            :graph-data="graphData"
          />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref } from '@nuxtjs/composition-api'
  import data from '~/data/pages/index'
  import contributionsCount from '~/data/contributionsCount.json'
  import Sparkline from '~/components/Sparkline.vue'

  export default defineComponent({
    // components
    components: { Sparkline },

    // setup
    setup() {
      // constants
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
