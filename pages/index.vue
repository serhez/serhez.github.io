<script setup lang="ts">
import socials from '@/content/socials.json';
import emojis from '@/content/emojis.json';

useHead({
    title: 'Sergio Hernández Gutiérrez',
    titleTemplate: '%s',
    meta: [{ name: 'description', content: 'Sergio Hernández Gutiérrez, Machine Learning scientist.' }],
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
                    <h1 class="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl sm:leading-tight">
                        Sergio Hernández Gutiérrez
                    </h1>
                    <div
                        class="flex flex-col gap-1 text-zinc-700 max-w-2xl text-2xl tracking-tight sm:text-3xl sm:leading-tight">
                        <h2>
                            Machine Learning Scientist
                        </h2>
                        <h2>
                            {{ emojis.pin }} Helsinki, Finland
                        </h2>
                    </div>
                </div>
                <div class="max-w-2xl space-y-4 text-xl text-zinc-700">
                    <p>I am a ML scientist currently looking for
                        PhD opportunities starting from autumn 2024. I have experience designing and employing <strong>deep
                            learning</strong> models, <strong>reinforcement learning</strong> and <strong>imitation
                            learning</strong> approaches to solve complex <strong>reasoning problems</strong>. Check out my
                        <fancy-link to="/research" class="text-sky-400 after:content-['_↗']">research output </fancy-link>
                        for
                        more.
                    </p>
                    <p>
                        Originally from the Canary Islands, I am currently finishing my <strong>MSc in ML at Aalto
                            University</strong>. I hold a <strong>BSc in Computer Science</strong> from
                        <strong>University College London (UCL)</strong>. I have worked
                        as an
                        <strong>engineer/scientist for +3 years</strong> in Spain, Scotland and Finland, in
                        companies such as <strong>Rockstar Games</strong>, <strong>Cabify</strong> and <strong>PwC</strong>.
                        Check out my <fancy-link to="/resume">resume</fancy-link> for more.
                    </p>
                </div>
                <div class="flex gap-6">
                    <a v-for="social in socials" :key="social.title" :href="social.url" :title="social.title"
                        class="text-zinc-600 transition hover:text-zinc-300" rel="me nofollow noopener" target="_blank">
                        <icon :name="social.icon" class="h-6
w-6" />
                    </a>
                </div>
            </div>
            <img class="w-1/4 rounded-3xl overflow-hidden object-scale-down m-auto shadow-md hidden lg:block transition duration-300 ease-in-out hover:scale-105"
                src="@/assets/me.jpg" />
        </div>
    </main>
</template>
