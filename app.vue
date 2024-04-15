<script setup lang="ts">
import '@fontsource-variable/karla';
import '@fontsource-variable/inter';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/aura-light-noir/theme.css';
</script>

<template>
    <nuxt-layout>
        <nuxt-page />
    </nuxt-layout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    opacity: 1;
    transition:
        opacity 0.2s,
        transform 0.2s;
    transform: translate3d(0px, 0px, 0px);
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translate3d(5px, 0px, 0px);
}

h1 {
    @apply max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight;
}

h2 {
    @apply text-lg tracking-tight sm:text-xl sm:leading-tight;
}

p {
    @apply lg:text-justify text-left;
}
</style>
