import {
  mdiNetworkStrength3,
  mdiNetworkStrength2,
  mdiNetworkStrength2Alert,
  mdiNetworkStrength1,
  mdiNetworkStrength1Alert,
  mdiNetworkStrengthOutline,
  mdiNetworkStrengthOffOutline,
} from '@mdi/js'

export default {
  skills: [
    {
      name: 'Solidity',
      image: 'solidity.svg',
      category: 'Blockchain',
      level: 4,
      url: 'https://docs.soliditylang.org/',
      color:
        'invert(9%) sepia(0%) saturate(1221%) hue-rotate(202deg) brightness(96%) contrast(71%);',
      description:
        'Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state.',
    },
    {
      name: 'Web3.js',
      image: 'web3js.svg',
      category: 'Blockchain',
      level: 4.5,
      url: 'https://web3js.readthedocs.io/',
      color:
        'invert(45%) sepia(20%) saturate(3924%) hue-rotate(350deg) brightness(102%) contrast(89%);',
      description:
        'web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.',
    },
    {
      name: 'PHP',
      image: 'php.svg',
      category: 'Backend',
      level: 4,
      url: 'https://www.php.net/',
      color:
        'invert(52%) sepia(71%) saturate(274%) hue-rotate(198deg) brightness(82%) contrast(83%);',
      description:
        'PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.',
    },
    {
      name: 'Laravel',
      image: 'laravel.svg',
      category: 'Backend',
      level: 4,
      url: 'https://laravel.com/',
      color:
        'invert(26%) sepia(64%) saturate(3232%) hue-rotate(347deg) brightness(99%) contrast(105%);',
      description:
        'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.',
    },
    {
      name: 'Vue',
      image: 'vue.svg',
      category: 'Frontend',
      level: 3.5,
      url: 'https://vuejs.org/',
      color:
        'invert(66%) sepia(44%) saturate(447%) hue-rotate(101deg) brightness(90%) contrast(97%);',
      description:
        'Vue is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
    },
    {
      name: 'Nuxt',
      image: 'nuxt.svg',
      category: 'Frontend',
      level: 4,
      url: 'https://nuxtjs.org/',
      color:
        'invert(76%) sepia(37%) saturate(6771%) hue-rotate(111deg) brightness(100%) contrast(101%);',
      description:
        'Build your next Vue.js application with confidence using Nuxt. An open source framework making web development simple and powerful.',
    },
    {
      name: 'Vuetify',
      image: 'vuetify.svg',
      category: 'Frontend',
      level: 4,
      url: 'https://vuetifyjs.com/',
      color:
        'invert(32%) sepia(95%) saturate(1178%) hue-rotate(191deg) brightness(82%) contrast(93%);',
      description:
        'Vuetify is a Vue UI Library with beautifully handcrafted Material Components. No design skills required — everything you need to create amazing applications is at your fingertips.',
    },
    {
      name: 'Tailwind',
      image: 'tailwind.svg',
      category: 'Frontend',
      level: 4,
      url: 'https://tailwindcss.com/',
      color:
        'invert(60%) sepia(81%) saturate(3417%) hue-rotate(151deg) brightness(98%) contrast(95%);',
      description:
        'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
    },
    {
      name: 'Redis',
      image: 'redis.svg',
      category: 'Database',
      level: 0,
      url: 'https://redis.io/',
      color:
        'invert(31%) sepia(87%) saturate(1414%) hue-rotate(337deg) brightness(85%) contrast(103%);',
      description:
        'Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.',
    },
    {
      name: 'PostgreSQL',
      image: 'postgresql.svg',
      category: 'Database',
      level: 0,
      url: 'https://www.postgresql.org/',
      color:
        'invert(39%) sepia(23%) saturate(3779%) hue-rotate(206deg) brightness(91%) contrast(93%);',
      description:
        'PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
    },
    {
      name: 'MySQL',
      image: 'mysql.svg',
      category: 'Database',
      level: 0,
      url: 'https://www.mysql.com/',
      color:
        'invert(44%) sepia(61%) saturate(408%) hue-rotate(163deg) brightness(88%) contrast(88%);',
      description:
        'MySQL Database Service is a fully managed database service to deploy cloud-native applications.',
    },
    {
      name: 'Livewire',
      image: 'livewire.svg',
      category: 'Backend',
      level: 0,
      url: 'https://laravel-livewire.com/',
      color:
        'invert(30%) sepia(83%) saturate(539%) hue-rotate(198deg) brightness(91%) contrast(83%);',
      description:
        'Livewire is a full-stack framework for Laravel that makes building dynamic interfaces simple, without leaving the comfort of Laravel.',
    },
    {
      name: 'Bootstrap',
      image: 'bootstrap.svg',
      category: 'Frontend',
      level: 0,
      url: 'https://getbootstrap.com/',
      color:
        'invert(40%) sepia(20%) saturate(1830%) hue-rotate(222deg) brightness(86%) contrast(86%);',
      description:
        'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.',
    },
    {
      name: 'Git',
      image: 'git.svg',
      category: 'Tool',
      level: 0,
      url: 'https://git-scm.com/',
      color:
        'invert(41%) sepia(76%) saturate(3620%) hue-rotate(344deg) brightness(99%) contrast(90%);',
      description:
        'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    },
    {
      name: 'Docker',
      image: 'docker.svg',
      category: 'System',
      level: 0,
      url: 'https://www.docker.com/',
      color:
        'invert(49%) sepia(14%) saturate(4512%) hue-rotate(176deg) brightness(98%) contrast(89%);',
      description:
        'Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development - desktop and cloud.',
    },
    {
      name: 'Nginx',
      image: 'nginx.svg',
      category: 'System',
      level: 0,
      url: 'https://nginx.org/',
      color:
        'invert(39%) sepia(99%) saturate(4784%) hue-rotate(136deg) brightness(96%) contrast(101%);',
      description:
        'Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
    },
    {
      name: 'JavaScript',
      image: 'javascript.svg',
      category: 'Frontend',
      level: 0,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/',
      color:
        'invert(84%) sepia(35%) saturate(1047%) hue-rotate(351deg) brightness(110%) contrast(94%);',
      description:
        'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
    },
    {
      name: 'CSS3',
      image: 'css3.svg',
      category: 'Frontend',
      level: 0,
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/',
      color:
        'invert(23%) sepia(83%) saturate(2252%) hue-rotate(189deg) brightness(99%) contrast(84%);',
      description:
        'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).',
    },
    {
      name: 'HTML5',
      image: 'html5.svg',
      category: 'Frontend',
      level: 0,
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/',
      color:
        'invert(40%) sepia(22%) saturate(4368%) hue-rotate(345deg) brightness(92%) contrast(94%);',
      description:
        'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.',
    },
    {
      name: 'G. Tag Manager',
      image: 'googletagmanager.svg',
      category: 'Tool',
      level: 0,
      url: 'https://tagmanager.google.com/',
      color:
        'invert(24%) sepia(76%) saturate(4421%) hue-rotate(212deg) brightness(105%) contrast(72%);',
      description:
        'G. Tag Manager is a tag management system that allows you to quickly and easily update measurement codes and related code fragments collectively known as tags on your website or mobile app.',
    },
    {
      name: 'Vim',
      image: 'vim.svg',
      category: 'Personal',
      level: 0,
      url: 'https://www.vim.org/',
      color:
        'invert(53%) sepia(67%) saturate(6598%) hue-rotate(124deg) brightness(89%) contrast(99%);',
      description:
        'Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple OS X.',
    },
    {
      name: 'Linux',
      image: 'linux.svg',
      category: 'Personal',
      level: 0,
      url: 'https://docs.kernel.org/',
      color:
        'invert(82%) sepia(69%) saturate(1268%) hue-rotate(337deg) brightness(101%) contrast(98%);',
      description:
        'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.',
    },
  ],
  headers: [
    {
      value: 'data-table-expand',
      divider: true,
      align: 'center',
      groupable: false,
      sortable: false,
      filterable: false,
    },
    {
      value: 'image',
      divider: true,
      align: 'center',
      width: '10%',
      groupable: false,
      sortable: false,
      filterable: false,
    },
    {
      text: 'Name',
      value: 'name',
      class: 'hide-icon-to-sortable',
      divider: true,
      align: 'center',
      groupable: false,
    },
    {
      text: 'Level',
      value: 'level',
      class: 'hide-icon-to-sortable',
      divider: true,
      align: 'center',
      groupable: false,
    },
    {
      text: 'Category',
      value: 'category',
      divider: true,
      align: 'center',
    },
    {
      text: 'Actions',
      value: 'actions',
      divider: true,
      align: 'center',
      groupable: false,
      sortable: false,
      filterable: false,
    },
  ],
  experiences: [
    {
      detail: 'Blockchain Developer',
      name: 'Bixos Incorporation',
      icon: mdiNetworkStrength3,
      year: '2021 - Present',
      type: 'Remote',
      description: 'Cryptocurrency asset management and investment company.',
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
      description: 'Cryptocurrency asset management and investment company.',
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
