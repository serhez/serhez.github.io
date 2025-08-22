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
                    <p>My long-term goal is to develop systems capable of <strong>open-ended
                        scientific knowledge discovery</strong>.
                        My current <strong>interests</strong> revolve around (in decreasing order of
                        active involvement):</p>
                    <ul class="list-disc pl-6">
                        <li><strong>Autonomous information seeking</strong>: uncertainty
                            self-awareness, action-taking attending to information gain maximization,
                            goal-directed exploration.
                        </li>
                        <li><strong>Reinforcement learning</strong> for large models: efficient
                            exploratinon capabilities in large search-spaces, open-ended & intrinsic
                            objectives.
                        </li>
                        <li>Predictive <strong>world models</strong>: providing scalable streams of
                            experiential data, grounding long reasoning trajectories and alleviating
                            hallucinations.
                        </li>
                        <li><strong>Knowledge representations</strong>: formal languages (e.g., math or
                            code), hierarchical, and compositional representations.
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
