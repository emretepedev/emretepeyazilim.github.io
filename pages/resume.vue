<template>
  <div>
    <div class="flex justify-center mt-12">
      <v-container>
        <Timeline :items="experience" />
        <DataTable :headers="data.headers" :items="data.skills" />
      </v-container>
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta } from '@nuxtjs/composition-api'

import {
  mdiNetworkStrengthOffOutline,
  mdiNetworkStrengthOutline,
  mdiNetworkStrength1Alert,
  mdiNetworkStrength1,
  mdiNetworkStrength2Alert,
  mdiNetworkStrength2,
  mdiNetworkStrength3,
} from '@mdi/js'

import data from '~/data/resume/resume.json'
import Timeline from '~/components/Timeline.vue'
import DataTable from '~/components/DataTable.vue'

export default defineComponent({
  // components
  components: { Timeline, DataTable },

  // setup
  setup() {
    // meta
    useMeta({
      title: 'Resume | ',
    })

    // return
    return {
      data,
      experience: [
        {
          detail: 'Blockchain Developer',
          name: 'Bixos Incorporation',
          icon: mdiNetworkStrength3,
          year: '2021 - Present',
          type: 'Remote',
          description:
            'Cryptocurrency asset management and investment company.',
        },
        {
          detail: 'Full Stack Developer',
          name: 'LandIndex',
          icon: mdiNetworkStrength2,
          year: '2021 - Present',
          type: 'Remote',
          description:
            'LandIndex provides digital land prices and analytics. Land investing basics, guides and resources.',
        },
        {
          detail: 'Backend Developer',
          name: 'Bixos Incorporation',
          icon: mdiNetworkStrength2Alert,
          year: '2021 - Present',
          type: 'Remote',
          description:
            'Cryptocurrency asset management and investment company.',
        },
        {
          detail: 'Backend Developer',
          name: 'Q Digital Agency',
          icon: mdiNetworkStrength1,
          year: '2020 - 2021',
          description:
            'Getting online is easy. Succeeding online is a different story. You’ll need more than just a beautiful website to stand out these days. Online marketing solutions. Conversion-based web design coupled with a lead generating marketing plan, your online success is inevitable.',
        },
        {
          detail: 'Intern',
          name: 'E-Yaz',
          icon: mdiNetworkStrength1Alert,
          year: '2019 - 2020',
        },
        {
          detail: 'Intern',
          name: 'MyData',
          icon: mdiNetworkStrengthOutline,
          year: '2018 - 2019',
        },
        {
          detail: 'Mathematics and Computer Science',
          name: 'Eskisehir Osmangazi University',
          icon: mdiNetworkStrengthOffOutline,
          year: '2016 - 2022',
        },
      ],
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
