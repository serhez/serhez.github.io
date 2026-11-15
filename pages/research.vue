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
                <h1>Current interests</h1>
                <div class="flex flex-col gap-2">
                    <p>
                        My <strong>long-term goal</strong> is to develop systems capable of
                        <strong>open-ended scientific discovery</strong>.
                    </p>
                    <p>
                        I am <strong>currently</strong> focusing on studying and designing supervision
                        <strong>signals</strong> for <strong>post-training</strong> LLMs
                        on open-ended research tasks.
                    </p>
                    <p>
                        My <strong>interests</strong> revolve around:
                    </p>
                    <ul class="list-disc pl-6 [&_ul]:list-[revert]">
                        <li class="mt-4">
                            <strong>Scaling Supervision</strong> &mdash; Studying and designing scalable feedback
                            methods that provide training & sampling signals.
                            <ul class="list-disc pl-6">
                                <li>How do we study and design signals for non-verifiable tasks?</li>
                                <li>How do we study signals for open-ended tasks, when there is no ground truth? E.g., scientific hypotheses or theories.</li>
                                <li>
                                    How do we construct signals from natural language feedback? Can models learn from
                                    their own feedback?
                                </li>
                                <li>How do we attribute credit to atomic actions (e.g., steps, tokens)?</li>
                            </ul>
                        </li>
                        <li class="mt-4">
                            <strong>Scaling Data</strong> &mdash; Empowering agents to learn long-horizon, complex tasks
                            from experience in vast state & action spaces.
                            <ul class="list-disc pl-6">
                                <li>
                                    Can we build environments for models to gather real-world live data? Can we build these pipelines for scientific discovery?
                                </li>
                                <li>Which sets of tools maximize agent empowerment while minimizing learning/context overhead?</li>
                            </ul>
                        </li>
                        <li class="mt-4">
                            <strong>Scaling Exploration & Introspection</strong> &mdash; Enabling agents to find and transform their own data.
                            <ul class="list-disc pl-6">
                                <li>
                                    How do we make agents
                                    <fancy-link to="https://arxiv.org/abs/2211.07819" class="italic"
                                        >learn what data to learn from"?</fancy-link
                                    >
                                </li>
                                <li>
                                    How can agents navigate incredibly vast oceans of data to drive automated science?
                                </li>
                                <li>
                                    How do we design & train models to identify their own weak/missing capabilities?
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col gap-0">
                <h1>Research output</h1>
                <research-table class="w-full" :publications="publications" @click="togglePopup" />
            </div>
        </div>

        <!-- Popup -->
        <VueFinalModal
            v-model="showPopup"
            display-directive="if"
            :hide-overlay="false"
            overlay-transition="vfm-fade"
            content-transition="vfm-fade"
            :click-to-close="true"
            :esc-to-close="true"
            background="non-interactive"
            :lock-scroll="true"
            :reserve-scroll-bar-gap="true"
            class="flex justify-center items-center"
            content-class="flex w-full h-full lg:h-fit lg:max-h-screen lg:max-w-2xl lg:mx-4 lg:space-y-2"
        >
            <research-popup v-model="selected" @close="showPopup = false" />
        </VueFinalModal>
    </main>
</template>
