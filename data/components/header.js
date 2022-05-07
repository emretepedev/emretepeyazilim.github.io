import {
  mdiCardAccountMail,
  mdiCoffee,
  mdiFileAccount,
  mdiXml,
} from '@mdi/js'

export default {
  pages: [
    { title: 'Home', to: '/', icon: mdiXml },
    { title: 'Resume', to: '/resume', icon: mdiFileAccount },
    { title: 'Contact', to: '/contact', icon: mdiCardAccountMail },
    {
      title: 'Coffee With Crypto',
      to: '/coffee-with-crypto',
      icon: mdiCoffee,
    },
  ],
}
