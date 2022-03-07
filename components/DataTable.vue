<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :search="search"
    :items-per-page="-1"
    item-key="name"
    multi-sort
    show-expand
    dense
    show-group-by
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: mdiArrowCollapseLeft,
      lastIcon: mdiArrowCollapseRight,
    }"
    :expanded.sync="expanded"
  >
    <template #top>
      <v-toolbar shaped dense>
        <v-toolbar-title>Skills</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          class="w-min"
          :append-icon="search ? '' : mdiMagnify"
          label="Search"
          dense
          rounded
          outlined
          placeholder="Search"
          clearable
          hide-details
        ></v-text-field>
      </v-toolbar>
    </template>
    <template #[`item.image`]="{ item }">
      <div class="flex items-center justify-center">
        <nuxt-img
          :src="`/icons/skills/${item.image}`"
          :alt="item.name"
          :title="item.name"
          :style="`filter: ${item.color}`"
          width="32"
          height="32"
          fix="cover"
          class="select-none"
        />
      </div>
    </template>
    <template #[`item.level`]="{ item }">
      <div v-if="item.level > 0" class="flex justify-center items-center">
        <v-rating
          readonly
          half-increments
          dense
          small
          background-color="grey"
          :value="item.level"
        ></v-rating>
      </div>
      <div v-else>
        <span>-</span>
      </div>
    </template>
    <template #[`item.actions`]="{ item }">
      <a :href="item.url" target="_blank">
        <v-icon color="blue">{{ mdiLink }}</v-icon>
      </a>
    </template>
    <template #[`expanded-item`]="{ headers, item }">
      <td v-if="!$vuetify.breakpoint.xsOnly" :colspan="headers.length">
        <v-textarea
          :value="
            item.description ? item.description : 'Description not found.'
          "
          :prepend-icon="mdiComment"
          class="mt-1"
          rows="1"
          auto-grow
          filled
          dense
          full-width
          solo
          readonly
          disabled
        >
        </v-textarea>
      </td>
      <div v-else>
        <v-textarea
          :value="
            item.description ? item.description : 'Description not found.'
          "
          :prepend-icon="mdiComment"
          class="mt-1"
          rows="1"
          auto-grow
          filled
          dense
          full-width
          solo
          readonly
          disabled
        >
        </v-textarea>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import {
  mdiArrowCollapseLeft,
  mdiArrowCollapseRight,
  mdiMagnify,
  mdiLink,
  mdiComment,
} from '@mdi/js'

export default defineComponent({
  // props
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    // consts
    const search = ref('')
    const expanded = ref([])

    // return
    return {
      search,
      expanded,
      mdiArrowCollapseLeft,
      mdiArrowCollapseRight,
      mdiMagnify,
      mdiLink,
      mdiComment,
    }
  },
})
</script>
