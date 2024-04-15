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
        <div class="flex flex-col gap-12">
            <div class="flex flex-col gap-6">
                <h1 class="max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
                    Current interests
                </h1>
                <div class="flex flex-col gap-2">
                    <p>I am currently working on my <strong>Master's thesis</strong>, exploring how large foundation
                        models can be used
                        to
                        solve <strong>multi-step reasoning problems via task decomposition</strong>.
                        My <strong>interests</strong> at the moment include:</p>
                    <ul class="list-disc pl-6">
                        <li><strong>Knowledge representation</strong> in deep models (e.g., embeddings), particularly
                            using formal
                            languages.
                        </li>
                        <li>Deep architectures and methods for solving complex <strong>reasoning problems</strong>
                            (e.g., mathematics or logic).
                        </li>
                        <li><strong>Reinforcement and imitation learning</strong>, particularly meta-learning the RL/IL
                            process.</li>
                    </ul>
                    <p>My <strong>long term ambition</strong> is to design models capable of not just imitating training
                        data, but of discovering and displaying new knowledge. Today, even the largest
                        models
                        struggle
                        to extrapolate complex reasoning patterns in data and exhibit valuable novel
                        behavior.</p>
                </div>
            </div>
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
