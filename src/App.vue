<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Employee } from './types/types';

// Components
import FilterButton from './components/FilterButton.vue';
import TableRow from './components/TableRow.vue';

// Composables
import useEmployees from './composables/useEmployees';
import useHeaders from './composables/useHeaders';
import ClearFilterButton from './components/ClearFilterButton.vue';
import SearchBar from './components/SearchBar.vue';

const { employees } = useEmployees();
const { headers } = useHeaders();

// Refs
const searchValue = ref('');
const statusFilter = ref<InstanceType<typeof FilterButton>>();
const actionFilter = ref<InstanceType<typeof FilterButton>>();
const searchBar = ref<InstanceType<typeof SearchBar>>();

// Functions for employee filtering
const filteredEmployees = computed(() => {
    return employees
        .filter(filterBySearch)
        .filter(filterByAction)
        .filter(filterByStatus);
});

function filterBySearch(employee: Employee) {
    const search = searchValue.value.toLowerCase();
    if (!search) return true;

    return headers
        .filter((header) => header.isSearchable)
        .some((header) =>
            String(employee[header.id]).toLowerCase().includes(search)
        );
}

function filterByAction(employee: Employee) {
    const selectedOptions = actionFilter.value?.selectedOptions || [];
    return (
        selectedOptions.length === 0 ||
        selectedOptions.some((action) => employee.actions.includes(action))
    );
}

function filterByStatus(employee: Employee) {
    const selectedOptions = statusFilter.value?.selectedOptions || [];
    return (
        selectedOptions.length === 0 ||
        selectedOptions.includes(employee.status)
    );
}

// Functions for filters
function getUniqueActions() {
    return employees.reduce((acc: string[], employee: Employee) => {
        employee.actions.map((action) => {
            if (!acc.includes(action)) {
                acc.push(action);
            }
        });
        return acc;
    }, []);
}

function getUniqueStatuses() {
    return [...new Set(employees.map((employee) => employee.status))];
}

function clearFilters() {
    if (statusFilter?.value?.selectedOptions) {
        statusFilter.value.selectedOptions = [];
    }
    if (actionFilter?.value?.selectedOptions) {
        actionFilter.value.selectedOptions = [];
    }
    if (searchBar?.value?.searchValue) {
        searchBar.value.searchValue = '';
    }
    searchValue.value = '';
}
</script>

<template>
    <div class="container grid gap-4">
        <img src="./assets/logo.png" />

        <div class="flex mt-6">
            <div class="flex gap-1 items-center">
                <FilterButton :options="getUniqueStatuses()" ref="statusFilter"
                    >Status</FilterButton
                >

                <FilterButton :options="getUniqueActions()" ref="actionFilter"
                    >Acties</FilterButton
                >

                <ClearFilterButton
                    v-if="
                        statusFilter?.selectedOptions.length ||
                        actionFilter?.selectedOptions.length ||
                        searchValue !== ''
                    "
                    @clear-filters="clearFilters"
                />
            </div>

            <SearchBar
                ref="searchBar"
                @update-query="(query) => (searchValue = query)"
            />
        </div>

        <div class="bg-white rounded-3xl py-12 px-8 shadow-lg overflow-auto">
            <table class="employee-table">
                <thead>
                    <th v-for="header in headers">{{ header.label }}</th>
                </thead>

                <tbody>
                    <TableRow
                        v-for="employee in filteredEmployees"
                        :key="employee.id"
                        :employee="employee"
                        :headers="headers"
                    />
                </tbody>
            </table>

            <div v-if="filteredEmployees.length === 0" class="text-center mt-8">
                <span>Er zijn geen resultaten gevonden. </span>

                <button
                    class="underline text-[var(--c-purple-heart)] cursor-pointer"
                    @click="clearFilters"
                >
                    <span>Wis alle filters</span>
                </button>
            </div>
        </div>
    </div>
</template>
