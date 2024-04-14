<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'

const route = useRoute();
const config = useRuntimeConfig();

useHead({
    htmlAttrs: { class: 'bg-[#ffffff]' },
    bodyAttrs: { class: 'flex flex-col text-zinc-800' },
    // link: [{ rel: 'canonical', href: config.public.siteUrl + route.fullPath }],
});
</script>

<template>
    <main class="container mx-auto my-16 flex gap-16 max-w-6xl flex-1 flex-col px-6 sm:px-12">
        <navigation />
        <section class="flex flex-1 flex-col">
            <slot />
            <ModalsContainer />
        </section>
    </main>
</template>

<style>
:root {
    tab-size: 4;
}

html {
    height: 100%;
}

body {
    min-height: 100%;
    overflow-y: scroll;
    @apply flex-1;
}

#__nuxt {
    @apply flex flex-col flex-1;
}
</style>
