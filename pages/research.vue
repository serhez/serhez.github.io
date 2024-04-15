<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

import publications from '@/content/research/publications.json';

const showPopup = ref(false);
const selected = ref(null);

function togglePopup(publication: any) {
    selected.value = publication;
    showPopup.value = !showPopup.value;
}
</script>

<template>
    <main>
        <div class="flex flex-col gap-16">
            <div class="flex flex-col gap-6">
                <h1 class="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
                    Publications
                </h1>
                <research-table class="w-full" :publications="publications" @click="togglePopup" />
            </div>
        </div>

        <!-- Popup -->
        <VueFinalModal v-model="showPopup" display-directive="if" :hide-overlay="false" overlay-transition="vfm-fade"
            content-transition="vfm-fade" :click-to-close="true" :esc-to-close="true" background="non-interactive"
            :lock-scroll="true" :reserve-scroll-bar-gap="true" swipe-to-close="up"
            class="flex justify-center items-center" content-class="max-w-2xl mx-4 space-y-2">
            <research-popup v-model="selected" />
        </VueFinalModal>
    </main>
</template>
