<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <v-data-table
          :headers="headers"
          :items="skills"
          :search="search"
          :items-per-page="-1"
          item-key="name"
          multi-sort
          show-expand
          dense
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
          <template #item.image="{ item }">
            <div class="flex items-center justify-center">
              <nuxt-img
                :src="`/icons/skills/${item.image}`"
                :alt="item.name"
                :title="item.name"
                :style="`filter: ${item.color}`"
                width="32"
                height="32"
                fix="cover"
              />
            </div>
          </template>
          <template #item.level="{ item }">
            <div class="flex justify-center items-center" v-if="item.level > 0">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-rating
                    readonly
                    half-increments
                    dense
                    small
                    background-color="grey"
                    :value="item.level"
                    v-bind="attrs"
                    v-on="on"
                  ></v-rating>
                </template>
                <span>a</span>
              </v-tooltip>
            </div>
          </template>
          <template #item.actions="{ item }">
            <a :href="item.url" target="_blank" v-if="item.url">
              <v-icon color="blue">{{ mdiLink }}</v-icon>
            </a>
          </template>
          <template #expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-textarea
                v-if="item.description"
                :value="item.description"
                :prepend-icon="mdiComment"
                class="mt-1"
                rows="1"
                filled
                dense
                auto-grow
                solo
                readonly
                disabled
              >
              </v-textarea>
              <span v-else>Description not found.</span>
            </td>
          </template>
        </v-data-table>
      </v-container>
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta, ref } from '@nuxtjs/composition-api'
import {
  mdiLink,
  mdiMagnify,
  mdiComment,
  mdiArrowCollapseLeft,
  mdiArrowCollapseRight,
} from '@mdi/js'

import skills from '~/data/resume/skills.json'
import headers from '~/data/resume/headers.json'

export default defineComponent({
  setup() {
    // meta
    useMeta({ title: 'Resume | ' })

    //consts
    const search = ref('')
    const expanded = ref([])

    // return
    return {
      headers,
      skills,
      search,
      expanded,
      mdiLink,
      mdiMagnify,
      mdiComment,
      mdiArrowCollapseLeft,
      mdiArrowCollapseRight,
    }
  },

  head: {},
})
</script>

<style></style>
