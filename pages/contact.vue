<script setup lang="ts">
const AT = '|AT|';
const DOT = '|DOT|';
</script>

<template>
    <main>
        <div class="flex flex-col gap-6">
            <h1>How to contact me</h1>
            <p>
                If you would like to <strong>collaborate</strong>, <strong>discuss opportunities</strong>, or
                <strong>ask any question</strong>, please get in touch!
            </p>
            <p>
                The best way to contact me is by sending an <strong>email to my address</strong>
                <span class="code">contact{{ DOT }}sergiohernandez{{ AT }}gmail{{ DOT }}com</span>. You can also message
                me on <fancy-link to="https://x.com/SergioHzGz">X/Twitter</fancy-link>.
            </p>
        </div>
    </main>
</template>

<style>
.code {
    @apply font-mono text-[12px] text-gray-600 bg-gray-200 rounded px-1 py-1;
}
</style>
