export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: {
                lang: 'en-US',
            },
            titleTemplate: '%s',
            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png',
                },
                { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
                // { rel: 'manifest', href: '/site.webmanifest' },
                // {
                //     rel: 'alternate',
                //     href: '/rss.xml',
                //     type: 'application/rss+xml',
                //     title: 'RSS feed',
                // },
            ],
            meta: [
                { property: 'og:site_name', content: 'Sergio Hernández Gutiérrez' },
                { property: 'og:type', content: 'website' },
            ],
        },
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            failOnError: false,
        },
    },
    target: 'static',
    experimental: {
        componentIslands: true,
    },
    runtimeConfig: {
        public: {
            siteUrl: 'https://sergiohg.com',
        },
    },
    typescript: {
        shim: false,
    },
    content: {
        highlight: {
            theme: 'vitesse-dark',
            preload: ['php', 'ts', 'bash', 'md', 'yaml', 'html', 'vue'],
        },
    },
    // nitro: {
    //     prerender: {
    //         routes: ['/sitemap.xml', '/rss.xml'],
    //     },
    // },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxt/image', 'nuxt-icon', 'nuxt-primevue'],
    css: ['vue-final-modal/style.css'],
    primevue: {
        // ripple: true,
        cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    },
});
