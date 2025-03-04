<script setup lang="ts">
import type { Employee, Header } from '../types/types';
import { parseValue } from '../utils/parse';

defineProps<{
    employee: Employee;
    headers: Header[];
}>();
</script>

<template>
    <tr>
        <td v-for="(header, index) in headers">
            <button v-if="index === 0" class="employee-table__button"></button>
            <span v-html="parseValue(employee[header.id], header)" />
        </td>
    </tr>
</template>
