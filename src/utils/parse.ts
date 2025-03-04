import type { Header } from '../types/types';
import { formatDate } from './date';

export function parseValue(value: any, header: Header) {
    if (header.isArray) {
        return value.reduce((acc: string, value: any) => {
            return (acc += `<span class="employee-table__tag">${value}</span>`);
        }, '');
    }
    if (header.isDate) {
        return formatDate(value);
    }
    return value;
}
