export type Employee = {
    id: number;
    name: string;
    status: string;
    actions: Array<string>;
    phone: string;
    address: string;
    birthDate: string;
};

export type Header = {
    id: keyof Employee;
    label: string;
    isArray?: boolean;
    isDate?: boolean;
    isSearchable?: boolean;
};
