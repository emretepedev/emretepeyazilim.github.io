import {
  mdiBookOpenVariant,
  mdiCoffee,
  mdiFileAccount,
  mdiListBox,
  mdiXml,
} from '@mdi/js'

export const pages = [
  { title: '~', to: '/', icon: mdiXml, target: null },
  { title: '~/resume', to: '/resume', icon: mdiFileAccount },
  { title: '~/contact', to: '/contact', icon: mdiListBox },
  {
    title: '~/coffee-with-crypto',
    to: '/coffee-with-crypto',
    icon: mdiCoffee,
  },
  {
    title: '~/guestbook',
    to: '/guestbook',
    icon: mdiBookOpenVariant,
  },
]
