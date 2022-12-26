import {
  mdiNetworkStrength1,
  mdiNetworkStrength1Alert,
  mdiNetworkStrength2,
  mdiNetworkStrength2Alert,
  mdiNetworkStrength3,
  mdiNetworkStrength4Cog,
  mdiNetworkStrengthOffOutline,
  mdiNetworkStrengthOutline,
} from '@mdi/js'

export const skills = [
  {
    name: 'Solidity',
    image: 'solidity.svg',
    category: 'Blockchain',
    url: 'https://docs.soliditylang.org/',
    color:
      'invert(9%) sepia(0%) saturate(1221%) hue-rotate(202deg) brightness(96%) contrast(71%);',
    description:
      'Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state.',
  },
  {
    name: 'Hardhat',
    image: 'hardhat.svg',
    category: 'Blockchain',
    url: 'https://hardhat.org/',
    description:
      'Hardhat is an Ethereum development environment for professionals. It facilitates performing frequent tasks, such as running tests, automatically checking code for mistakes or interacting with a smart contract.',
  },
  {
    name: 'Truffle',
    image: 'truffle.svg',
    category: 'Blockchain',
    url: 'https://trufflesuite.com/truffle/',
    description:
      'A world class development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier.',
  },
  {
    name: 'Ethers.js',
    image: 'ethersjs.svg',
    category: 'Blockchain',
    url: 'https://docs.ethers.io/',
    description:
      'The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.',
  },
  {
    name: 'Web3.js',
    image: 'web3js.svg',
    category: 'Blockchain',
    url: 'https://web3js.readthedocs.io/',
    color:
      'invert(45%) sepia(20%) saturate(3924%) hue-rotate(350deg) brightness(102%) contrast(89%);',
    description:
      'web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.',
  },
  {
    name: 'Slither',
    image: 'slither.svg',
    category: 'Blockchain',
    url: 'https://github.com/crytic/slither/',
    color:
      'invert(17%) sepia(51%) saturate(4871%) hue-rotate(341deg) brightness(85%) contrast(92%);',
    description:
      'Slither is a Solidity static analysis framework written in Python 3. It runs a suite of vulnerability detectors, prints visual information about contract details, and provides an API to easily write custom analyses. Slither enables developers to find vulnerabilities, enhance their code comprehension, and quickly prototype custom analyses.',
  },
  {
    name: 'Mythril',
    image: 'mythril.svg',
    category: 'Blockchain',
    url: 'https://mythril-classic.readthedocs.io/en/master/',
    color:
      'invert(30%) sepia(97%) saturate(1267%) hue-rotate(180deg) brightness(108%) contrast(99%);',
    description:
      'Mythril detects a range of security issues, including integer underflows, owner-overwrite-to-Ether-withdrawal, and others.',
  },
  {
    name: 'Solhint',
    image: 'solhint.svg',
    category: 'Blockchain',
    url: 'https://protofire.github.io/solhint/',
    description:
      'Solhint is an open source project for linting Solidity code. Solhint provides both Security and Style Guide validations.',
  },
  {
    name: 'JavaScript',
    image: 'javascript.svg',
    category: 'Frontend',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/',
    color:
      'invert(84%) sepia(35%) saturate(1047%) hue-rotate(351deg) brightness(110%) contrast(94%);',
    description:
      'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
  },
  {
    name: 'TypeScript',
    image: 'typescript.svg',
    category: 'Frontend',
    url: 'https://www.typescriptlang.org/',
    color:
      'invert(38%) sepia(84%) saturate(691%) hue-rotate(177deg) brightness(90%) contrast(85%);',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
  },
  {
    name: 'Vue',
    image: 'vue.svg',
    category: 'Frontend',
    url: 'https://vuejs.org/',
    color:
      'invert(66%) sepia(44%) saturate(447%) hue-rotate(101deg) brightness(90%) contrast(97%);',
    description:
      'Vue is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.',
  },
  {
    name: 'PHP',
    image: 'php.svg',
    category: 'Backend',
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
    url: 'https://laravel.com/',
    color:
      'invert(26%) sepia(64%) saturate(3232%) hue-rotate(347deg) brightness(99%) contrast(105%);',
    description:
      'Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.',
  },
  {
    name: 'Git',
    image: 'git.svg',
    category: 'Software',
    url: 'https://git-scm.com/',
    color:
      'invert(41%) sepia(76%) saturate(3620%) hue-rotate(344deg) brightness(99%) contrast(90%);',
    description:
      'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
  },
  {
    name: 'Docker',
    image: 'docker.svg',
    category: 'Software',
    url: 'https://www.docker.com/',
    color:
      'invert(49%) sepia(14%) saturate(4512%) hue-rotate(176deg) brightness(98%) contrast(89%);',
    description:
      'Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development - desktop and cloud.',
  },
  {
    name: 'Vim',
    image: 'vim.svg',
    category: 'Personal',
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
    url: 'https://docs.kernel.org/',
    color:
      'invert(82%) sepia(69%) saturate(1268%) hue-rotate(337deg) brightness(101%) contrast(98%);',
    description:
      'Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution.',
  },
]

export const headers = [
  {
    value: 'data-table-expand',
    divider: true,
    align: 'center',
    groupable: false,
    sortable: false,
    filterable: false,
  },
  {
    text: 'Image',
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
]

export const experiences = [
  {
    detail: 'Blockchain Developer',
    name: '*** (Private)',
    icon: mdiNetworkStrength4Cog,
    year: '2022 - Present',
  },
  {
    detail: 'Blockchain Developer',
    name: 'Bixos Incorporation',
    icon: mdiNetworkStrength3,
    year: '2021 - 2022',
    description: 'Cryptocurrency asset management and investment company.',
  },
  {
    detail: 'Full Stack Developer',
    name: 'LandIndex',
    icon: mdiNetworkStrength2,
    year: '2021 - 2022',
    type: 'Remote',
    description:
      'LandIndex is a Metaverse data analytics tool that helps businesses and investors to understand the value of the land at Metaverse.',
  },
  {
    detail: 'Backend Developer',
    name: 'Bixos Incorporation',
    icon: mdiNetworkStrength2Alert,
    year: '2021 - 2022',
    description: 'Cryptocurrency asset management and investment company.',
  },
  {
    detail: 'Full Stack Developer',
    name: 'Freelance',
    icon: mdiNetworkStrength1,
    year: '2020 - 2021',
  },
  {
    detail: 'Intern',
    name: 'E-Yaz',
    icon: mdiNetworkStrength1Alert,
    year: '2019',
  },
  {
    detail: 'Intern',
    name: 'MyData',
    icon: mdiNetworkStrengthOutline,
    year: '2018',
  },
  {
    detail: 'Mathematics and Computer Science',
    name: 'Eskisehir Osmangazi University',
    icon: mdiNetworkStrengthOffOutline,
    year: '2016 - 2022',
  },
]
