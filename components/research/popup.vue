<script setup lang="ts">
const model = defineModel<{
    title: string;
    authors: string[];
    venue: string;
    year: string;
    status: string;
    abstract: string;
    links: Link[];
}>()
</script>

<template>
    <div
        class="m-2 p-8 lg:p-14 bg-zinc-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <div class="flex flex-col divide-y-2">
            <div class="flex flex-col gap-2 pb-3">
                <h2 class="text-xl font-bold tracking-tight sm:text-2xl sm:leading-tight">{{ model?.title }}</h2>
                <div class="flex flex-col gap-1 text-zinc-700 italic">
                    <h3 class="text-lg tracking-tight sm:text-xl sm:leading-tight">
                        {{ model?.authors.join(', ') }}
                    </h3>
                    <h4 class="text-lg tracking-tight sm:text-xl sm:leading-tight">
                        {{ model?.venue }} - {{ model?.year }}
                    </h4>
                </div>
            </div>
            <div class="flex flex-col gap-4 pt-3">
                <p class="text-md text-zinc-600 text-justify">{{ model?.abstract }}</p>
                <div class="flex gap-6">
                    <a v-for="link in model?.links" :key="link.title" :href="link.url" :title="link.title"
                        class="text-zinc-600 transition hover:text-zinc-300" rel="me nofollow noopener" target="_blank">
                        <icon :name="link.icon" class="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
