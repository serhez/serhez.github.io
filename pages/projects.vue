<script setup lang="ts">
import projects from '@/content/projects.json';
</script>

<template>
    <main>
        <div class="flex flex-col gap-6">
            <h1>
                Software libraries
            </h1>
            <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                <project-card v-for="project in projects" :key="project.title" :title="project.title"
                    :description="project.description" :links="project.links" />
            </div>
        </div>
    </main>
</template>
