<script setup lang="ts">
const props = defineProps<{
    title: string;
    authors: string[];
    venue: string;
    abstract: string;
    links: Link[];
}>()

defineEmits(['click']);
</script>

<template>
    <button
        class="flex flex-col gap-4 p-4 bg-zinc-50 rounded-xl shadow-md text-left hover:shadow-xl transition-shadow duration-300 ease-in-out"
        @click="$emit('click')">
        <h2 class="text-lg font-bold tracking-tight sm:text-xl sm:leading-tight">{{ props.title }}</h2>
        <div class="flex flex-col gap-1 text-zinc-700 text-md tracking-tight sm:text-lg sm:leading-tight">
            <h3>{{ props.authors.join(', ') }}</h3>
            <h3>{{ props.venue }}</h3>
        </div>
        <div class="flex gap-6 mt-auto mb-0">
            <a v-for="link in props.links" :key="link.title" :href="link.url" :title="link.title"
                class="text-zinc-600 transition hover:text-zinc-300" rel="me nofollow noopener" target="_blank">
                <icon :name="link.icon" class="h-6 w-6" />
            </a>
        </div>
    </button>
</template>
