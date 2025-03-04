<script setup lang="ts">
import { computed, ref } from 'vue';
import useEmployees from './composables/useEmployees';
import type { Employee, Header } from './types/types';

const { employees } = useEmployees();

const searchValue = ref('');

const headers: Array<Header> = [
    {
        id: 'name',
        label: 'Naam',
        isSearchable: true,
    },
    {
        id: 'birthDate',
        label: 'Geboortedatum',
        isDate: true,
        isSearchable: true,
    },
    {
        id: 'phone',
        label: 'Telefoonnummer',
    },
    {
        id: 'status',
        label: 'Status',
    },
    {
        id: 'actions',
        label: 'Acties',
        isArray: true,
    },
]

const filteredEmployees = computed(() => {
    const searchableValues = getSearchableValues(headers);
    const matchingEmployees = getMatchingEmployees(searchableValues, employees)
    return matchingEmployees;
})

function getMatchingEmployees(searchableValues: Array<Header>, employees: Array<Employee>) {
    return employees.filter((employee) => searchableValues.some((value) => {
        const employeeValueLowerCase = String(employee[value.id]).toLowerCase();
        const searchValueLowerCase = searchValue.value.toLowerCase()
        return employeeValueLowerCase.includes(searchValueLowerCase)
    }))
}

function getSearchableValues(headers: Array<Header>) {
    return headers.filter((header) => header.isSearchable);
}


function formatDate(input: string): string {
    const date = new Date(input);
    if (isNaN(date.getTime())) return input;

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}


function parseValue(value: any, header: Header) {
    if (header.isArray) {
        return value.reduce((acc: string, value: any) => {
            return acc += `<span class="employee-table__tag">${value}</span>`
        }, '')
    }
    if (header.isDate) {
        return formatDate(value)
    }
    return value;
}
</script>

<template>
    <div class="container grid gap-4">
        <img src="./assets/logo.png">
        <div class="flex">
            <input type="text" v-model="searchValue" placeholder="Zoek op naam of geboortedatum" class="w-96 ml-auto">
        </div>
        <div class="bg-white rounded-3xl py-12 px-8 shadow-lg overflow-auto">
            <table class="employee-table min-w-[1024px]">
                <thead>
                    <th v-for="header in headers">{{ header.label }}</th>
                </thead>

                <tbody>
                    <tr v-for="employee in filteredEmployees">
                        <td v-for="(header, index) in headers">
                            <button v-if="index === 0" class="employee-table__button"></button>
                            <span v-html="parseValue(employee[header.id], header)" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
