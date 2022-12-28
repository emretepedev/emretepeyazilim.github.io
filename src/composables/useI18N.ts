export const useI18N = (word: string) => {
  const i18nStore = useI18NStore()
  const { language } = i18nStore

  const words = {
    tr: {
      welcome: 'Hosgeldin',
      my_love: '$ikim',
    },
    en: {
      welcome: 'Welcome',
      my_love: 'My love',
    },
    fr: {
      welcome: 'Bienvenue',
      my_love: 'Mon amour',
    },
  }

  return words[language][word]
}
