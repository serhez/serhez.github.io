<script setup lang="ts">
import socials from '@/content/socials.json';
import emojis from '@/content/emojis.json';

useHead({
    title: 'Sergio Hernández-Gutiérrez',
    titleTemplate: '%s',
    meta: [
        {
            name: 'description', content: 'Sergio Hernández-Gutiérrez, Machine Learning Researcher.'
        }
    ],
});

definePageMeta({
    changefreq: 'monthly',
});
</script>

<template>
    <main>
        <div class="flex flex-row gap-10">
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-4">
                    <h1>
                        Sergio Hernández Gutiérrez
                    </h1>
                    <div class="flex flex-col gap-1">
                        <h2>
                            Machine Learning Researcher
                        </h2>
                        <div class="flex gap-2 items-center">
                            <i class="pi pi-map-marker" style="font-size: 24px" />
                            <h2>Tübingen, Germany</h2>
                        </div>
                    </div>
                </div>
                <div class="max-w-2xl space-y-4">
                    <p>I am a <strong>machine learning researcher</strong>, currently pursuing a PhD under the
                        supervision of Prof. Matthias Bethge (Universität Tübingen) and Prof. Mrinmaya Sachan (ETH
                        Zürich). I am also a member of the <fancy-link to="https://ellis.eu/">ELLIS</fancy-link> PhD
                        program. My work is
                        directed towards
                        the development of
                        <strong>knowledge discovery</strong>
                        systems, particularly in the sciences. My current interests revolve around <strong>machine
                            reasoning</strong>,
                        <strong>formal knowledge and data representations</strong>, and different aspects of
                        <strong>reinforcement learning</strong>. Check out my
                        <fancy-link to="/research">research output & interests</fancy-link> page for more.
                    </p>
                    <p>
                        Originally from the Canary Islands, I hold a <strong>MSc in Machine
                            Learning</strong> from <strong>Aalto
                            University</strong> and a <strong>BSc in Computer Science</strong> from
                        University College London (<strong>UCL</strong>). I have worked
                        as an
                        <strong>engineer & researcher for +3 years</strong> in Spain, Scotland, Finland, and Germany, in
                        companies such as <strong>Rockstar Games</strong>, <strong>Cabify</strong>,
                        and <strong>PwC</strong>. Check out my <fancy-link to="/resume">resume</fancy-link> for more.
                    </p>
                </div>
                <div class="flex gap-6">
                    <a v-for="social in socials" :key="social.title" :href="social.url" :title="social.title"
                        class="text-zinc-600 transition hover:text-zinc-300" rel="me nofollow noopener" target="_blank">
                        <icon :name="social.icon" class="h-6 w-6" />
                    </a>
                </div>
            </div>
            <img class="w-1/4 rounded-3xl overflow-hidden object-scale-down m-auto shadow-md hidden lg:block transition duration-300 ease-in-out hover:scale-105"
                src="@/assets/me.jpg" />
        </div>
    </main>
</template>

<style scoped>
h1 {
    @apply max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl sm:leading-tight;
}

h2 {
    @apply text-zinc-700 max-w-2xl text-2xl tracking-tight sm:text-3xl sm:leading-tight;
}

p {
    @apply text-base sm:text-lg md:text-lg text-zinc-700;
}
</style>
