const isDev = process.env.NODE_ENV !== 'production'

export default {
  target: 'static',

  ssr: false,

  dev: isDev,

  telemetry: false,

  components: true,

  loading: false,

  vue: {
    config: {
      productionTip: isDev,
      devtools: isDev,
      silent: !isDev,
      performance: isDev,
    },
  },

  build: {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true,
      },
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    devtools: false,
    transpile: ['vee-validate/dist/rules'],
    extractCSS: {
      ignoreOrder: true,
    },
  },

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 30 * 1, // one month
    },
  },

  head: {
    title: 'Homepage | ',
    titleTemplate: '%s' + process.env.SPA_NAME + ' - Emre Tepe',
    meta: [
      process.env.TEST_WEBSITE === 'true'
        ? {
            hid: 'robots',
            name: 'robots',
            content: 'noindex, nofollow',
          }
        : {
            hid: 'keywords',
            name: 'keywords',
            content: 'emre tepe, blockchain, developer',
          },
    ],
  },

  css: ['@/assets/css/main.css'],

  publicRuntimeConfig: {
    spaName: process.env.SPA_NAME,
    spaOrigin: process.env.SPA_ORIGIN,
    githubPersonalAccessToken: process.env.GH_PERSONAL_ACCESS_TOKEN,
    pageclipActionUrl: process.env.PAGECLIP_ACTION_URL,
    googleRecaptchaV2SiteKey: process.env.GOOGLE_RECAPTCHA_V2_SITE_KEY,
    googleRecaptchaV2Size: 'v2-normal',
    googleAnalytics4Id: process.env.GOOGLE_ANALYTICS_4_ID,
    ownerAddress: process.env.OWNER_ADDRESS,
    txConfirmationBlocks: parseInt(process.env.TX_CONFIRMATION_BLOCKS),
    repositoryUrl: process.env.REPOSITORY_URL,
    visitorsBookContractAddress: process.env.VISITORS_BOOK_CONTRACT_ADDRESS,
    visitorsBookContractChainId:
      '0x' + Number(process.env.VISITORS_BOOK_CONTRACT_CHAIN_ID).toString(16),
    visitorsBookContractChainName:
      process.env.VISITORS_BOOK_CONTRACT_CHAIN_NAME,
    testWebsite: process.env.TEST_WEBSITE,
    lastModifiedAt: new Date().toUTCString().replace('GMT', 'UTC'),
  },

  privateRuntimeConfig: {},

  router: {
    trailingSlash: false,
    base: process.env.SPA_PATH,
  },

  generate: {
    subFolders: false,
  },

  plugins: [
    '~/plugins/vue-gtag',
    '~/plugins/vee-validate',
    '~/plugins/vue-long-click',
    { src: '~/plugins/vue-toastify', mode: 'client' },
  ],

  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
    'nuxt-purgecss',
    '@nuxtjs/pwa',
    '@nuxt/postcss8',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],

  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/recaptcha',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  googleFonts: {
    families: {
      Roboto: true,
    },
    display: 'swap',
    subsets: ['latin'],
    prefetch: false,
    preconnect: false,
    preload: false,
    useStylesheet: false,
    download: true,
    overwriting: true,
    inject: true,
    base64: true,
  },

  moment: {
    defaultTimezone: 'UTC',
    timezone: {
      matchZones: ['UTC'],
      startYear: 2021,
      endYear: 2050,
    },
  },

  purgeCSS: {
    enabled: !isDev,
    paths: ['./node_modules/vuetify/src/**/*.ts'],
    whitelist: ['v-app', 'v-app--wrap'],
    whitelistPatterns: [/^v-((?!app).)*$/, /^theme--*/, /^text--*/, /--text$/],
    whitelistPatternsChildren: [
      /^v-((?!app).)*$/,
      /^theme--*/,
      /^text--*/,
      /--text$/,
    ],
  },

  pwa: {
    icon: {
      fileName: 'icon.png',
      plugin: false,
    },
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      appleStatusBarStyle: 'black',
      favicon: true,
      name: 'Homepage | ' + process.env.SPA_NAME + ' - Emre Tepe',
      author: 'emretepedev',
      description:
        'Emre Tepe is an ambitious and open-minded Web and Blockchain Developer who seriously cares about discipline. He likes following the pace of new technology.',
      theme_color: '#1E1E1E',
      ogHost: process.env.SPA_URL,
      ogImage: true,
      twitterCard: 'summary_large_image',
      twitterSite: process.env.SPA_NAME,
      twitterCreator: process.env.SPA_NAME,
    },
    manifest: {
      name: 'Homepage | ' + process.env.SPA_NAME,
      short_name: process.env.SPA_NAME,
      description:
        'Emre Tepe is an ambitious and open-minded Web and Blockchain Developer who seriously cares about discipline. He likes following the pace of new technology.',
      background_color: '#1E1E1E',
    },
  },

  vuetify: {
    defaultAssets: false,
    icons: {
      iconfont: 'mdiSvg',
    },
    treeShake: true,
    theme: {
      dark: true,
    },
  },

  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID,
    enabled: true,
    debug: false,
    scriptDefer: true,
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
  },

  recaptcha: {
    siteKey: process.env.GOOGLE_RECAPTCHA_V3_SITE_KEY,
    hideBadge: false,
    language: 'en',
    version: 3,
  },

  robots: [
    {
      UserAgent: '*',
      Disallow: '',
    },
    {
      Sitemap: process.env.SPA_URL + '/sitemap.xml',
    },
  ],

  sitemap: {
    hostname: process.env.SPA_ORIGIN,
    gzip: true,
    trailingSlash: false,
    cacheTime: 1000 * 60 * 15,
    defaults: {
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
    routes: [
      {
        url: '/',
        changefreq: 'monthly',
        priority: 1,
      },
    ],
  },
}
