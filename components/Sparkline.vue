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
        :auto-draw-duration="10000"
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

<script setup lang="ts">
  import { mdiPoll } from '@mdi/js'

  interface SparklineProps {
    graphData: number[]
    gradients: string[]
  }

  defineProps<SparklineProps>()
</script>
