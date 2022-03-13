import {
  mdiCardAccountMail,
  mdiCoffee,
  mdiFileAccount,
  mdiSourceRepositoryMultiple,
  mdiXml,
} from '@mdi/js'

export default {
  pages: [
    { title: 'Home', to: '/', icon: mdiXml },
    {
      title: 'Projects',
      to: '/projects',
      icon: mdiSourceRepositoryMultiple,
    },
    { title: 'Resume', to: '/resume', icon: mdiFileAccount },
    { title: 'Contact', to: '/contact', icon: mdiCardAccountMail },
    {
      title: 'Coffee With Crypto',
      to: '/coffee-with-crypto',
      icon: mdiCoffee,
    },
  ],
}
