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
                <h1>
                    Current interests
                </h1>
                <div class="flex flex-col gap-2">
                    <p>My overall goal is to develop systems capable of <strong>scientific knowledge discovery</strong>.
                        To this
                        end, my current <strong>interests</strong> revolve around:</p>
                    <ul class="list-disc pl-6">
                        <li><strong>Machine reasoning</strong>: induction, deduction,
                            causation,
                            decomposition, and generalization.
                        </li>
                        <li><strong>Reinforcement learning</strong>: active RL settings, goal-directed exploration
                            strategies, implicit RL (i.e., meta-learning approaches to navigating an RL environment),
                            etc.
                        </li>
                        <li><strong>Knowledge representations</strong>
                            that enable reasoning, particularly using formal languages, hierarchical, and compositional
                            representations.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col gap-0">
                <h1>
                    Research output
                </h1>
                <research-table class="w-full" :publications="publications" @click="togglePopup" />
            </div>
        </div>

        <!-- Popup -->
        <VueFinalModal v-model="showPopup" display-directive="if" :hide-overlay="false" overlay-transition="vfm-fade"
            content-transition="vfm-fade" :click-to-close="true" :esc-to-close="true" background="non-interactive"
            :lock-scroll="true" :reserve-scroll-bar-gap="true" class="flex justify-center items-center"
            content-class="flex w-full h-full lg:h-fit lg:max-h-screen lg:max-w-2xl lg:mx-4 lg:space-y-2">
            <research-popup v-model="selected" @close="showPopup = false" />
        </VueFinalModal>
    </main>
</template>
