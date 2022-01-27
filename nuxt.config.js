export default {
    target: 'static',

    ssr: true,

    dev: false,

    telemetry: false,

    loading: false,

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Homepage | ',
        titleTemplate: '%s' + process.env.SPA_NAME,
        meta: [
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'emre tepe, blockchain, developer',
            },
        ],
    },

    publicRuntimeConfig: {
        spaName: process.env.SPA_NAME,
        g: process.env.G,
        pageclipActionUrl: process.env.PAGECLIP_ACTION_URL,
    },

    privateRuntimeConfig: {},

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vee-validate',
        { src: '~/plugins/vue-toastify', mode: 'client' },
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/google-analytics',
        '@nuxtjs/google-fonts',
        '@nuxtjs/pwa',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@nuxt/image',
        'nuxt-purgecss',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/vuetify',
        '@nuxtjs/recaptcha',
        '@nuxtjs/composition-api/module',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate/dist/rules'],
        extractCSS: {
            ignoreOrder: true,
        },
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
            name: 'Homepage | ' + process.env.SPA_NAME,
            author: process.env.SPA_NAME,
            description:
                'I’m a young ambitious web developer who seriously cares discipline. On the other hand, I’m an open-minded person to learn new stuffs about technology and software.',
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
                'I’m a young ambitious web developer who seriously cares discipline. On the other hand, I’m an open-minded person to learn new stuffs about technology and software.',
            background_color: '#1E1E1E',
        },
    },

    sitemap: {
        hostname: process.env.SPA_URL,
        gzip: true,
        exclude: [],
        defaults: {
            changefreq: 'monthly',
            priority: 0.5,
            lastmod: new Date(),
        },
        routes: [
            {
                url: '/',
                changefreq: 'weekly',
                priority: 1,
                lastmod: new Date(),
            },
        ],
    },

    robots: [
        {
            UserAgent: '*',
            Allow: '/',
        },
        {
            Sitemap: process.env.SPA_URL + '/sitemap.xml',
        },
    ],

    render: {
        // Setting up cache for 'static' directory
        // https://web.dev/uses-long-cache-ttl
        static: {
            maxAge: 1000 * 60 * 60 * 24 * 180,
        },
    },

    googleFonts: {
        families: {
            Roboto: {
                wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
        },
        display: 'swap',
        subsets: 'latin',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        overwriting: false,
        inject: true,
        base64: false,
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

    purgeCSS: {
        enabled: true,
        paths: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            './node_modules/vuetify/src/**/*.ts',
        ],
        whitelist: ['v-app', 'v-app--wrap'],
        whitelistPatterns: [
            /^v-((?!app).)*$/,
            /^theme--*/,
            /^text--*/,
            /--text$/,
        ],
        whitelistPatternsChildren: [
            /^v-((?!app).)*$/,
            /^theme--*/,
            /^text--*/,
            /--text$/,
        ],
        extractors: [
            {
                extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
                extensions: ['html', 'vue', 'js'],
            },
        ],
    },

    googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID,
    },

    recaptcha: {
        hideBadge: false,
        language: 'en',
        siteKey: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
        version: 2,
    },
}
