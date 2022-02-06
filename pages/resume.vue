<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <v-row justify="center" align="center" class="mb-1">
          <div
            class="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="large"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="emretepedev"
            data-version="v1"
          ></div>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="skills"
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
          </template>
          <template #[`item.actions`]="{ item }">
            <a v-if="item.url" :href="item.url" target="_blank">
              <v-icon color="blue">{{ mdiLink }}</v-icon>
            </a>
          </template>
          <template #[`expanded-item`]="{ headers, item }">
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
import {
  mdiLink,
  mdiMagnify,
  mdiComment,
  mdiArrowCollapseLeft,
  mdiArrowCollapseRight,
} from '@mdi/js'

import { defineComponent, useMeta, ref } from '@nuxtjs/composition-api'
import skills from '~/data/resume/skills.json'
import headers from '~/data/resume/headers.json'

export default defineComponent({
  setup() {
    // meta
    useMeta({
      title: 'Resume | ',
      script: [
        {
          src: 'https://platform.linkedin.com/badges/js/profile.js',
          async: true,
          defer: true,
          callback: () => {
            styleToLinkedInBadge()
          },
        },
      ],
    })

    // consts
    const search = ref('')
    const expanded = ref([])

    // methods
    const styleToLinkedInBadge = () => {
      let count = 0
      const frequency = 1000 / 2 // 0.5 sec
      const maxTime = (1000 / frequency) * 30 // 30 sec

      const interval = setInterval(() => {
        const linkedInIframe = document.querySelector('iframe')

        if (Boolean(linkedInIframe) || count === maxTime) {
          clearInterval(interval)

          if (count === maxTime) {
            return
          }

          linkedInIframe.contentWindow.document.querySelector(
            'html'
          ).style.textAlign = 'center'
        }

        count++
      }, frequency)
    }

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

<style>
.v-data-table-header th {
  white-space: nowrap !important;
}

.v-data-table-header th.hide-icon-to-sortable:hover .v-data-table-header__icon {
  display: inline-flex !important;
}
.v-data-table-header
  tr
  > th.hide-icon-to-sortable
  > .v-data-table-header__icon {
  display: none !important;
}

@media (max-width: 425px) {
  .v-data-footer__pagination {
    width: 100% !important;
  }

  .v-data-footer__icons-before,
  .v-data-footer__icons-after,
  .v-data-footer__select {
    margin: auto !important;
  }
}
</style>
