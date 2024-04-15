<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    underline: {
        type: Boolean,
        default: true,
    }
});
</script>

<template>
    <NuxtLink :to="props.to" class="relative inline-block transition group text-sky-700 after:content-['_↗']" :class="{
        'hover:before:scale-x-100 hover:before:origin-left before:w-full before:h-0.5 \
        before:origin-right before:transition-transform before:duration-500 before:scale-x-0 before:bg-sky-700 \
        before:absolute before:left-0 before:bottom-0': props.underline,
    }">
        <slot />
    </NuxtLink>
</template>
