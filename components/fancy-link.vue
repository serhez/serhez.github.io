<script setup lang="ts">
const props = defineProps<{
    to: str,
}>()
</script>

<template>
    <NuxtLink :to="props.to"
        class="text-sky-700 after:content-['_↗'] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-sky-700 before:absolute before:left-0 before:bottom-0">
        <slot />
    </NuxtLink>
</template>
