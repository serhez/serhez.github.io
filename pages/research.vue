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
                    <p>My <strong>long-term goal</strong> is to develop systems capable of <strong>open-ended
                        scientific knowledge discovery</strong>.
                        My current <strong>interests</strong> revolve around enabling agents to learn from their own experience in open-ended and complex environments:</p>
                    <ul class="list-disc pl-6 [&_ul]:list-[revert]">
                        <li class="mt-4"><strong>Upscaling Reinforcement Learning</strong> &mdash; Enabling agents to learn from experience in vast state & action spaces under long-horizon, complex tasks.
                            <ul class="list-disc pl-6">
                                <li>How do we densify sparse reward signals (e.g., verifiable outcome rewards, natural language task descriptions, etc.)?</li>
                                <li>How do we attribute credit to atomic actions (e.g., tokens)?</li>
                                <li>How do we learn from natural language feedback? Can models learn from their own feedback?</li>
                            </ul>
                        </li>
                        <li class="mt-4"><strong>Autonomous Information Seeking</strong> &mdash; Enabling agents to identify the data they need and develop a plan to obtain it via interaction.
                            <ul class="list-disc pl-6">
                                <li>Can we intrinsically incentivize agents to perform efficient goal-directed exploration?</li>
                                <li>How can agents explore & test-time search in large, noisy, and feedback-scarse environments?</li>
                            </ul>
                        </li>
                        <li class="mt-4"><strong>World Modeling</strong> & <strong>Open-Endedness</strong> &mdash; Generating scalable streams of
                            experiential data, grounding long reasoning trajectories, and providing non-saturable training incentives.
                            <ul class="list-disc pl-6">
                                <li>Can we leverage world models for online planning and training-time efficient sampling?</li>
                                <li>Should we define a world modeling objective (i.e., modeling the dynamics of the environment) in post-training just like we did in pre-training (i.e., next-token prediction)?</li>
                            </ul>
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
