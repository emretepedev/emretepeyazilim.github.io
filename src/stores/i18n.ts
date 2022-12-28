export const useI18NStore = defineStore('i18n', {
  state: () => ({
    language: 'en',
  }),

  actions: {
    setLanguage(language: string) {
      this.language = language
    },
  },
})
