import type { Employee } from '../types/types';

const employees: Array<Employee> = [
    {
        id: 1,
        name: 'John Doe',
        status: 'Ziek',
        actions: ['Plan van Aanpak', 'Bedrijfsarts gesprek'],
        phone: '0612345678',
        address: 'Straat 1, Amsterdam',
        birthDate: '15-03-1985'
    },
    {
        id: 2,
        name: 'Jane Smith',
        status: 'Gezond',
        actions: [],
        phone: '0623456789',
        address: 'Straat 2, Rotterdam',
        birthDate: '22-07-1990'
    },
    {
        id: 3,
        name: 'Mark Johnson',
        status: 'Re-integratie',
        actions: ['Eerstejaarsevaluatie'],
        phone: '0634567890',
        address: 'Straat 3, Utrecht',
        birthDate: '30-11-1982'
    },
    {
        id: 4,
        name: 'Alice Brown',
        status: 'Ziek',
        actions: ['Contact bedrijfsarts'],
        phone: '0645678901',
        address: 'Straat 4, Den Haag',
        birthDate: '10-06-1995'
    },
    {
        id: 5,
        name: 'Bob White',
        status: 'Gezond',
        actions: [],
        phone: '0656789012',
        address: 'Straat 5, Eindhoven',
        birthDate: '25-09-1988'
    },
    {
        id: 6,
        name: 'Charlie Green',
        status: 'Re-integratie',
        actions: ['Werkhervatting gesprek'],
        phone: '0667890123',
        address: 'Straat 6, Breda',
        birthDate: '05-12-1979'
    },
    {
        id: 7,
        name: 'Diana Black',
        status: 'Ziek',
        actions: ['Re-integratieplan'],
        phone: '0678901234',
        address: 'Straat 7, Groningen',
        birthDate: '18-04-1983'
    },
    {
        id: 8,
        name: 'Eve Blue',
        status: 'Gezond',
        actions: [],
        phone: '0689012345',
        address: 'Straat 8, Nijmegen',
        birthDate: '27-01-1992'
    },
    {
        id: 9,
        name: 'Frank Yellow',
        status: 'Re-integratie',
        actions: ['Eerste contact werkgever'],
        phone: '0690123456',
        address: 'Straat 9, Tilburg',
        birthDate: '14-08-1980'
    },
    {
        id: 10,
        name: 'Grace Red',
        status: 'Ziek',
        actions: ['Bedrijfsarts gesprek'],
        phone: '0611122233',
        address: 'Straat 10, Almere',
        birthDate: '09-05-1986'
    },
    {
        id: 11,
        name: 'Harry Orange',
        status: 'Gezond',
        actions: [],
        phone: '0622233344',
        address: 'Straat 11, Zwolle',
        birthDate: '31-10-1993'
    },
    {
        id: 12,
        name: 'Ivy Violet',
        status: 'Re-integratie',
        actions: ['Terugkeergesprek'],
        phone: '0633344455',
        address: 'Straat 12, Arnhem',
        birthDate: '21-07-1975'
    },
    {
        id: 13,
        name: 'Jack Cyan',
        status: 'Ziek',
        actions: ['Poortwachter traject'],
        phone: '0644455566',
        address: 'Straat 13, Apeldoorn',
        birthDate: '11-02-1984'
    },
    {
        id: 14,
        name: 'Kelly Brown',
        status: 'Gezond',
        actions: [],
        phone: '0655566677',
        address: 'Straat 14, Leiden',
        birthDate: '16-09-1996'
    },
    {
        id: 15,
        name: 'Leo Pink',
        status: 'Re-integratie',
        actions: ['Begeleidingstraject'],
        phone: '0666677788',
        address: 'Straat 15, Maastricht',
        birthDate: '29-12-1981'
    },
    {
        id: 16,
        name: 'Mia Silver',
        status: 'Ziek',
        actions: ['Medisch advies'],
        phone: '0677788899',
        address: 'Straat 16, Haarlem',
        birthDate: '08-06-1989'
    },
    {
        id: 17,
        name: 'Nathan Gold',
        status: 'Gezond',
        actions: [],
        phone: '0688899900',
        address: 'Straat 17, Amersfoort',
        birthDate: '23-03-1991'
    },
    {
        id: 18,
        name: 'Olivia Teal',
        status: 'Re-integratie',
        actions: ['Psychologisch consult'],
        phone: '0699900112',
        address: 'Straat 18, Dordrecht',
        birthDate: '19-07-1987'
    },
    {
        id: 19,
        name: 'Paul Indigo',
        status: 'Ziek',
        actions: ['Werkhervattingsplan'],
        phone: '0610101010',
        address: 'Straat 19, Zwolle',
        birthDate: '03-11-1980'
    },
    {
        id: 20,
        name: 'Quinn Lime',
        status: 'Gezond',
        actions: [],
        phone: '0620202020',
        address: 'Straat 20, Almelo',
        birthDate: '14-05-1994'
    }
];

export default function useEmployees() {
    return { employees };
}
