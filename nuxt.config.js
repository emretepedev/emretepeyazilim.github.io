require('dotenv').config()

const spaName = process.env.SPA_NAME
const spaUrl = process.env.SPA_URL
const siteKey = process.env.GOOGLE_RECAPTCHA_SITE_KEY
const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID

export default {
    target: 'static',

    ssr: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s' + spaName,
        meta: [
            {
                hid: 'keywords',
                name: 'keywords',
                content: 'emre tepe, blockchain, developer',
            },
        ],
    },

    dev: false,

    telemetry: false,

    loading: false,

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/main.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vee-validate',
        { src: '~/plugins/vue-toastify', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/composition-api/module'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/dotenv',
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
            name: 'Homepage | ' + spaName,
            author: spaName,
            description:
                'I’m a young ambitious web developer who seriously cares discipline. On the other hand, I’m an open-minded person to learn new stuffs about technology and software.',
            theme_color: '#1E1E1E',
            ogHost: spaUrl,
            ogImage: true,
            twitterCard: 'summary_large_image',
            twitterSite: spaName,
            twitterCreator: spaName,
        },
        manifest: {
            name: 'Homepage | ' + spaName,
            short_name: spaName,
            description:
                'I’m a young ambitious web developer who seriously cares discipline. On the other hand, I’m an open-minded person to learn new stuffs about technology and software.',
            background_color: '#1E1E1E',
        },
    },

    sitemap: {
        hostname: spaUrl,
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
            Sitemap: spaUrl + '/sitemap.xml',
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
                wght: [100, 300, 400, 500, 700, 900],
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
        id: googleAnalyticsId,
    },

    recaptcha: {
        hideBadge: false,
        language: 'en',
        siteKey: siteKey,
        version: 2,
    },

    image: {
        domains: ['https://landindex.io'],
    },
}
