<script setup lang="ts">
const AT = '|AT|';
const DOT = '|DOT|';
</script>

<template>
    <main>
        <div class="flex flex-col gap-6">
            <h1>
                How to contact me
            </h1>
            <p>
                If you would like to <strong>collaborate</strong>, <strong>discuss opportunities</strong>, or <strong>ask any question</strong>, please get in touch! I am very happy to address these.
            </p>
            <p>
                The best way to contact me is by sending an <strong>email to my address</strong> <span class="code">contact{{ DOT }}sergiohernandez{{ AT }}gmail{{ DOT }}com</span> (replace the <span class="code">{{ DOT }}</span> and <span class="code">{{ AT }}</span>; I'm trying to avoid email scrapers). I do not actively use social networks.
            </p>
            <p>
                I try to only check emails twice a day: early in the morning and late in the afternoon. I may not respond to your email right away, but I will definitely see it if it arrives in my inbox!
            </p>
        </div>
    </main>
</template>

<style>
.code {
    @apply font-mono text-[12px] text-gray-600 bg-gray-200 rounded px-1 py-1;
}
</style>
