import type { Header } from '../types/types';

const headers: Array<Header> = [
    {
        id: 'name',
        label: 'Naam',
        isSearchable: true
    },
    {
        id: 'birthDate',
        label: 'Geboortedatum',
        isDate: true,
        isSearchable: true
    },
    {
        id: 'phone',
        label: 'Telefoonnummer'
    },
    {
        id: 'status',
        label: 'Status'
    },
    {
        id: 'actions',
        label: 'Acties',
        isArray: true
    }
];

export default function useHeaders() {
    return { headers };
}
