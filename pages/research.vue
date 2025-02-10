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
                    <p>My overall goal is to <strong>design and build agents capable of knowledge discovery</strong>,
                        particularly in the sciences.
                        To this
                        end, my current <strong>interests</strong> revolve around:</p>
                    <ul class="list-disc pl-6">
                        <li>How to achieve different types of <strong>machine reasoning</strong>: induction, deduction,
                            causation, or
                            decomposition. In particular, deep architectures, methods and systems for solving complex
                            reasoning problems
                            (e.g., mathematics, programming tasks, planning, etc.). My <strong>Master's thesis</strong>
                            explored how language
                            models can be used
                            to
                            solve <strong>multi-step reasoning problems via task decomposition</strong> as the
                            complexity of
                            the tasks increases.
                        </li>
                        <li>Generalizing reinforcement learning methods to better adapt to
                            unseen tasks by meta-learning <strong>exploration and data-gathering strategies</strong>:
                            <i>"learning what data to learn from"</i>. Employing <strong>active learning</strong>
                            frameworks to enable self-supervised agents to model the unknown dynamics of complex
                            systems.
                        </li>
                        <li><strong>Knowledge representations</strong> in deep models (e.g., latent embedding spaces)
                            that enable reasoning, particularly using formal languages, hierarchical and object-centric
                            compositional representation learning, etc.
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
