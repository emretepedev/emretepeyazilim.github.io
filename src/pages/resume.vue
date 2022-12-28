<template>
  <div>
    <div class="mt-12 flex justify-center">
      <v-container>
        <v-btn @click="i18nStore.setLanguage('en')">en</v-btn>
        <v-btn @click="i18nStore.setLanguage('tr')">tr</v-btn>
        <v-btn @click="i18nStore.setLanguage('fr')">fr</v-btn>
        {{ $t('welcome') }}
        {{ $t('my_love') }}
        <LinkedInBadge />
        <Timeline :items="experiences" />
        <DataTable :headers="headers" :items="skills" />
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { experiences, headers, skills } from '@/data/pages/resume'
  const $t = useI18N
  const i18nStore = useI18NStore()

  useNuxt2Meta({
    title: 'Resume | ',
  })
</script>

<style>
  .v-data-table-header th {
    white-space: nowrap !important;
  }

  .v-data-table-header
    tr
    th.hide-icon-to-sortable:hover
    .v-data-table-header__icon {
    display: inline-flex !important;
  }

  /* stylelint-disable-next-line no-descending-specificity */
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
