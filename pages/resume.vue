<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <DataTable :headers="data.headers" :items="data.skills" />
      </v-container>
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'
import data from '~/data/resume/resume.json'
import DataTable from '~/components/DataTable.vue'

export default defineComponent({
  // components
  components: { DataTable },

  // setup
  setup() {
    // meta
    useMeta({
      title: 'Resume | ',
    })

    // return
    return {
      DataTable,
      data,
    }
  },

  // head
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
