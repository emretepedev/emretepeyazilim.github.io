<template>
  <v-timeline
    :dense="$vuetify.breakpoint.smAndDown"
    :reverse="$vuetify.breakpoint.smAndDown"
  >
    <v-timeline-item
      v-for="(item, index) in items"
      :key="index"
      color="transparent"
      small
    >
      <template #icon>
        <v-icon>{{ item.icon }}</v-icon>
      </template>
      <template v-if="!$vuetify.breakpoint.smAndDown" #opposite>
        <span>{{ item.year }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title>{{ item.detail }}</v-card-title>
        <v-card-subtitle>
          {{ item.name }}
          <span v-if="item.type"> ({{ item.type }})</span>
          <div v-if="$vuetify.breakpoint.smAndDown" class="block">
            {{ item.year }}
          </div>
        </v-card-subtitle>
        <v-card-text v-if="item.description">
          {{ item.description }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup lang="ts">
  import type { TimelineItem } from '@/types'

  interface TimelineProps {
    items: TimelineItem[]
  }

  defineProps<TimelineProps>()
</script>

<style>
  @media (max-width: 425px) {
    div.v-card__title {
      word-break: break-word !important;
      font-size: 1rem !important;
      line-height: 1.5rem !important;
    }

    div.v-card__subtitle {
      font-size: 0.875rem !important;
      line-height: 1.25rem !important;
    }

    div.v-card__text {
      font-size: 0.75rem !important;
      line-height: 1rem !important;
    }
  }
</style>
