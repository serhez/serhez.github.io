<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const props = defineProps<{
    publications: any;
}>()

const filters = ref();
const statuses = ref(['conference', 'workshop', 'article', 'unpublished']);
const loading = ref(false);

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

const emit = defineEmits(['click']);

function onRowClick(event: any) {
    emit('click', event.data);
}
</script>


<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="props.publications" sortMode="multiple" removableSort paginator
            showGridlines :rows="5" dataKey="id" filterDisplay="menu" :loading="loading" :rowHover="true"
            @row-click="onRowClick" :globalFilterFields="['title', 'authors', 'venue', 'year', 'status']"
            class="cursor-pointer">
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
            <Column field="title" header="Title" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.title }}
                </template>
            </Column>
            <Column field="authors" header="Authors" style="min-width: 12rem">
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
                    <a v-for="link in data.links" :key="link.title" :href="link.url" :title="link.title"
                        class="text-zinc-600 transition hover:text-zinc-300" rel="me nofollow noopener" target="_blank">
                        <icon :name="link.icon" class="h-6 w-6" />
                    </a>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
