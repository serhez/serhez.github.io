<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string;
    links: Link[];
}>()
</script>

<template>
    <div
        class="flex flex-col gap-4 p-4 bg-zinc-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h2 class="text-xl font-bold tracking-tight sm:text-2xl sm:leading-tight">{{ props.title }}</h2>
        <p class="text-md text-zinc-600">{{ props.description }}</p>
        <div class="flex gap-6 mt-auto mb-0">
            <a v-for="link in props.links" :key="link.title" :href="link.url" :title="link.title"
                class="text-zinc-600 transition hover:text-zinc-300" rel="me nofollow noopener" target="_blank">
                <icon :name="link.icon" class="h-6 w-6" />
            </a>
        </div>
    </div>
</template>
