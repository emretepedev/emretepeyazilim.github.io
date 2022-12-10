export default {
  // target property: https://go.nuxtjs.dev/config-target
  target: 'static',

  // ssr property: https://go.nuxtjs.dev/config-ssr
  ssr: true,

  // dev property: https://nuxtjs.org/docs/configuration-glossary/configuration-dev
  dev: false,

  // telemetry property: https://nuxtjs.org/docs/configuration-glossary/configuration-telemetry
  telemetry: false,

  // auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // loading property: https://nuxtjs.org/docs/configuration-glossary/configuration-loading
  loading: false,

  // build configuration: https://go.nuxtjs.dev/config-build
  build: {
    // all options https://github.com/kangax/html-minifier#options-quick-reference
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
    devtools: false,
    transpile: ['vee-validate/dist/rules'],
    extractCSS: {
      ignoreOrder: true,
    },
  },

  // render property: https://nuxtjs.org/docs/configuration-glossary/configuration-render
  render: {
    // setting up cache for 'static' directory and  https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 30 * 6, // six months
    },
  },

  // global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Homepage | ',
    titleTemplate: '%s' + process.env.SPA_NAME + ' - Emre Tepe',
    meta: [
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'emre tepe, blockchain, developer',
      },
    ],
  },

  // global css: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // use runtime config instead of env https://nuxtjs.org/docs/directory-structure/nuxt-config/#publicruntimeconfig
  publicRuntimeConfig: {
    spaName: process.env.SPA_NAME,
    githubPersonalAccessToken: process.env.GH_PERSONAL_ACCESS_TOKEN,
    pageclipActionUrl: process.env.PAGECLIP_ACTION_URL,
    googleRecaptchaV2SiteKey: process.env.GOOGLE_RECAPTCHA_V2_SITE_KEY,
    googleRecaptchaV2Size: 'v2-normal',
    googleAnalytics4Id: process.env.GOOGLE_ANALYTICS_4_ID,
    ownerAddress: process.env.OWNER_ADDRESS.toLowerCase(),
    txConfirmationBlocks: parseInt(process.env.TX_CONFIRMATION_BLOCKS),
    repositoryUrl: process.env.REPOSITORY_URL,
    visitorsBookContractAddress: process.env.VISITORS_BOOK_CONTRACT_ADDRESS,
    lastModifiedAt: new Date().toUTCString().replace('GMT', 'UTC'),
  },

  // use runtime config instead of env https://nuxtjs.org/docs/directory-structure/nuxt-config/#privateruntimeconfig
  privateRuntimeConfig: {},

  // router: https://nuxtjs.org/docs/configuration-glossary/configuration-router/
  router: {
    trailingSlash: false,
  },

  // generate: https://nuxtjs.org/docs/configuration-glossary/configuration-generate/
  generate: {
    subFolders: false,
  },

  // plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-gtag',
    '~/plugins/vee-validate',
    { src: '~/plugins/vue-toastify', mode: 'client' },
  ],

  // modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-fonts',
    'nuxt-purgecss',
    '@nuxtjs/pwa',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],

  // modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/gtm',
    '@nuxtjs/recaptcha',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
  ],

  // all options https://github.com/nuxt-community/google-fonts-module/blob/master/src/module.ts#L23
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
    overwriting: false,
    inject: true,
    base64: false,
  },

  // all options https://github.com/Developmint/nuxt-purgecss/blob/master/lib/utils.js#L10
  purgeCSS: {
    enabled: true,
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
    // all options https://github.com/nuxt-community/pwa-module/blob/main/src/icon.ts#L11
    icon: {
      fileName: 'icon.png',
      plugin: false,
    },
    // all options https://github.com/nuxt-community/pwa-module/blob/main/src/meta.ts#L8
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: true,
      appleStatusBarStyle: 'black',
      favicon: true,
      name: 'Homepage | ' + process.env.SPA_NAME + ' - Emre Tepe',
      author: 'emretepedev',
      description:
        'Emre Tepe is a young, ambitious and open-minded Web and Blockchain Developer who seriously cares about discipline. He likes following the pace of new technology.',
      theme_color: '#1E1E1E',
      ogHost: process.env.SPA_URL,
      ogImage: true,
      twitterCard: 'summary_large_image',
      twitterSite: process.env.SPA_NAME,
      twitterCreator: process.env.SPA_NAME,
    },
    // all options https://github.com/nuxt-community/pwa-module/blob/main/src/manifest.ts#L8
    manifest: {
      name: 'Homepage | ' + process.env.SPA_NAME,
      short_name: process.env.SPA_NAME,
      description:
        'Emre Tepe is a young, ambitious and open-minded Web and Blockchain Developer who seriously cares about discipline. He likes following the pace of new technology.',
      background_color: '#1E1E1E',
    },
  },

  // all options https://tailwindcss.nuxtjs.org/options/
  tailwindcss: {
    viewer: false,
  },

  // all options https://github.com/nuxt-community/vuetify-module/blob/master/src/options.ts#L37
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

  // all options https://github.com/nuxt-community/gtm-module#options
  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID,
    enabled: true,
    debug: false,
    scriptDefer: true,
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
  },

  // all options https://github.com/nuxt-community/recaptcha-module#configuration
  recaptcha: {
    siteKey: process.env.GOOGLE_RECAPTCHA_V3_SITE_KEY,
    hideBadge: false,
    language: 'en',
    version: 3,
  },

  // all options https://github.com/nuxt-community/robots-module#the-keys-and-values-available
  robots: [
    {
      UserAgent: '*',
      Allow: '/',
    },
    {
      Sitemap: process.env.SPA_URL + '/sitemap.xml',
    },
  ],

  // all options https://github.com/nuxt-community/sitemap-module/blob/dev/lib/options.js#L15
  sitemap: {
    hostname: process.env.SPA_URL,
    gzip: true,
    trailingSlash: false,
    cacheTime: 1000 * 60 * 15, // 15 mins
    defaults: {
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date(),
    },
    routes: [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1,
        lastmod: new Date(),
      },
    ],
  },
}
