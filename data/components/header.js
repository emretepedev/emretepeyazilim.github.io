import {
  mdiBookOpenVariant,
  mdiCoffee,
  mdiFileAccount,
  mdiListBox,
  mdiXml,
} from '@mdi/js'

export default {
  pages: [
    { title: '~', to: '/', icon: mdiXml },
    { title: '~/resume', to: '/resume', icon: mdiFileAccount },
    { title: '~/contact', to: '/contact', icon: mdiListBox },
    {
      title: '~/coffee-with-crypto',
      to: '/coffee-with-crypto',
      icon: mdiCoffee,
    },
    {
      title: '~/visitors-book',
      to: '/visitors-book',
      icon: mdiBookOpenVariant,
    },
  ],
}
