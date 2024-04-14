<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const props = defineProps<{
    publications: any;
}>()

// const data = ref([
//     {
//         "title": "co-adaptation of agent morphology and behaviour with self-imitating reinforcement learning",
//         "authors": ["sergio hernández-gutiérrez", "ville kyrki", "kevin s. luck"],
//         "venue": "icml",
//         "year": "2024",
//         "status": "submitted",
//         "abstract": "in this paper we consider the problem of co-adapting the body and behaviour of agents, a long-standing research problem in the community of evolutionary robotics. previous work has largely focused on the development of methods exploiting massive parallelization of agent evaluations with large population sizes, a paradigm which is not applicable to the real world. more recent data-efficient approaches utilizing reinforcement learning can suffer from distributional shifts to transition dynamics as well as to states and action spaces when experiencing new body morphologies. in this work, we propose a new co-adaptation method combining reinforcement learning and state-aligned self-imitation learning. we show that the integration of a self-imitation signal improves data-efficiency, behavioural recovery for unseen designs and performance convergence.",
//         "links": [
//             {
//                 "title": "arxiv",
//                 "url": "https://arxiv.org/abs/1912.09363",
//                 "icon": "mdi:file-document-outline"
//             },
//             {
//                 "title": "github",
//                 "url": "https://github.com/serhez/cosil",
//                 "icon": "mdi:github"
//             }
//         ]
//     },
// ]);

const filters = ref();
const statuses = ref(['conference', 'workshop', 'article', 'unpublished']);
const loading = ref(false);

onMounted(() => {
    // TODO: Load research data from content/research/papers.json as example below
    // json('@/content/research/papers.json').then((data) => {
    //     data.value = data;
    //     loading.value = false;
    // });
});


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        title: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        authors: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        venue: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        year: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        abstract: {},
        links: {},
    };
};

initFilters();

const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const clearFilter = () => {
    initFilters();
};
const getStatus = (status) => {
    switch (status) {
        case 'published':
            return 'success';

        case 'submitted':
            return 'info';

        case 'unpublished':
            return 'warning';
    }
};

const getVenue = (status) => {
    switch (status) {
        case 'conference':
            return 'success';

        case 'workshop':
            return 'info';

        case 'article':
            return 'warning';
    }
};

const emit = defineEmits(['click']);

function onRowClick(event: any) {
    emit('click', event.data);
}
</script>


<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="props.publications" sortMode="multiple" removableSort paginator showGridlines
            :rows="5" dataKey="id" filterDisplay="menu" :loading="loading" :rowHover="true" @row-click="onRowClick"
            :globalFilterFields="['title', 'authors', 'venue', 'year', 'status']">
            <template #header>
                <div class="flex gap-2">
                    <InputIcon class="flex items-center">
                        <i class="pi pi-search" style="font-size: 20px" />
                    </InputIcon>
                    <InputText v-model="filters['global'].value" placeholder="Keyword Search"
                        class="py-1 px-2 border-slate-300 border-[1px] font-normal" />
                </div>
            </template>
            <template #empty> No publications found. </template>
            <template #loading> Loading publications data. Please wait. </template>
            <Column field="title" header="Title" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.title }}
                </template>
            </Column>
            <Column field="authors" header="Authors" sortable style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.authors.join(', ') }}
                </template>
            </Column>
            <Column field="year" header="Year" sortable style="min-width: 6rem">
                <template #body="{ data }">
                    {{ data.year }}
                </template>
            </Column>
            <Column field="venue" header="Venue" sortable style="min-width: 8rem">
                <template #body="{ data }">
                    {{ data.venue }}
                </template>
            </Column>
            <Column header="Status" field="status" sortable style="min-width: 6rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getStatus(data.status)" />
                </template>
            </Column>
            <Column header="Links" field="links" style="min-width: 6rem">
                <template #body="{ data }">
                    <a v-for="link in data.links" :key="link.title" :href="link.url" :title="link.title" class="text-zinc-600 transition hover:text-zinc-300" rel="me nofollow noopener" target="_blank">
                        <icon :name="link.icon" class="h-6 w-6" />
                    </a>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
