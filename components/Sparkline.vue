<template>
  <v-card class="overflow-y-auto" outlined ripple>
    <v-card-title>
      <v-spacer v-if="$vuetify.breakpoint.mdAndDown"></v-spacer>
      <v-icon>
        {{ mdiPoll }}
      </v-icon>
    </v-card-title>
    <v-card-subtitle class="text-center">
      <div class="text-caption grey--text text-uppercase">
        contributions in the last
        <strong>30 days</strong>
      </div>
    </v-card-subtitle>
    <v-sheet color="transparent">
      <v-sparkline
        auto-draw
        :auto-draw-duration="5000"
        :auto-line-width="false"
        :fill="false"
        :gradient="gradients"
        gradient-direction="top"
        :line-width="1"
        :padding="8"
        :show-labels="true"
        :smooth="10"
        stroke-linecap="round"
        type="trend"
        :value="graphData"
      >
      </v-sparkline>
    </v-sheet>
  </v-card>
</template>

<script>
  import { defineComponent } from '@nuxtjs/composition-api'
  import { mdiPoll } from '@mdi/js'

  export default defineComponent({
    props: {
      graphData: {
        type: Array,
        default() {
          return []
        },
        required: true,
      },
      gradients: {
        type: Array,
        default() {
          return []
        },
        required: true,
      },
    },
    setup() {
      return {
        mdiPoll,
      }
    },
  })
</script>
