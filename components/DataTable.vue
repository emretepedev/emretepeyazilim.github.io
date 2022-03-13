<template>
  <v-data-table
    dense
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: mdiArrowCollapseLeft,
      lastIcon: mdiArrowCollapseRight,
    }"
    :headers="headers"
    item-key="name"
    :items="items"
    :items-per-page="-1"
    multi-sort
    :search="search"
    show-expand
    show-group-by
  >
    <template #top>
      <v-toolbar dense shaped>
        <v-toolbar-title>Skills</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          :append-icon="search ? '' : mdiMagnify"
          class="w-min"
          clearable
          dense
          hide-details
          label="Search"
          outlined
          placeholder="Search"
          rounded
        ></v-text-field>
      </v-toolbar>
    </template>
    <template #[`item.image`]="{ item }">
      <div class="flex items-center justify-center">
        <nuxt-img
          :alt="item.name"
          class="select-none"
          fix="cover"
          height="32"
          :src="`/icons/skills/${item.image}`"
          :style="`filter: ${item.color}`"
          :title="item.name"
          width="32"
        />
      </div>
    </template>
    <template #[`item.level`]="{ item }">
      <div v-if="item.level > 0" class="flex items-center justify-center">
        <v-rating
          background-color="grey"
          dense
          half-increments
          readonly
          small
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
          auto-grow
          class="mt-1"
          dense
          disabled
          filled
          full-width
          :prepend-icon="mdiComment"
          readonly
          rows="1"
          solo
          :value="
            item.description ? item.description : 'Description not found.'
          "
        >
        </v-textarea>
      </td>
      <div v-else>
        <v-textarea
          auto-grow
          class="mt-1"
          dense
          disabled
          filled
          full-width
          :prepend-icon="mdiComment"
          readonly
          rows="1"
          solo
          :value="
            item.description ? item.description : 'Description not found.'
          "
        >
        </v-textarea>
      </div>
    </template>
  </v-data-table>
</template>

<script>
  import { defineComponent } from '@nuxtjs/composition-api'
  import {
    mdiArrowCollapseLeft,
    mdiArrowCollapseRight,
    mdiComment,
    mdiLink,
    mdiMagnify,
  } from '@mdi/js'

  export default defineComponent({
    // props
    props: {
      headers: {
        type: Array,
        default() {
          return []
        },
        required: true,
      },
      items: {
        type: Array,
        default() {
          return []
        },
        required: true,
      },
    },
    setup() {
      // return
      return {
        search: '',
        mdiArrowCollapseLeft,
        mdiArrowCollapseRight,
        mdiMagnify,
        mdiLink,
        mdiComment,
      }
    },
  })
</script>
