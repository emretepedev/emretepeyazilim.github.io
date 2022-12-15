<template>
  <v-card class="overflow-y-auto" outlined ripple>
    <v-card-title class="relative">
      <v-icon class="absolute" left>
        {{ mdiPoll }}
      </v-icon>
      <div class="text-caption grey--text text-uppercase mx-auto">
        contributions in the last
        <strong>30 days</strong>
      </div>
    </v-card-title>
    <v-sheet color="transparent">
      <v-sparkline
        auto-draw
        auto-draw-duration="10000"
        auto-line-width
        :gradient="gradients"
        line-width="1"
        show-labels
        smooth="9"
        stroke-linecap="round"
        :value="graphData"
      />
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
