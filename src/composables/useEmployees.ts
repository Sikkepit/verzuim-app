import type { Employee } from '../types/types';

const employees: Array<Employee> = [
    {
        id: 1,
        name: 'John Doe',
        status: 'Ziek',
        actions: ['Plan van Aanpak', 'Bedrijfsarts gesprek'],
        phone: '0612345678',
        address: 'Straat 1, Amsterdam',
        birthDate: '1985-03-15'
    },
    {
        id: 2,
        name: 'Jane Smith',
        status: 'Gezond',
        actions: [],
        phone: '0623456789',
        address: 'Straat 2, Rotterdam',
        birthDate: '1990-07-22'
    },
    {
        id: 3,
        name: 'Mark Johnson',
        status: 'Re-integratie',
        actions: ['Eerstejaarsevaluatie'],
        phone: '0634567890',
        address: 'Straat 3, Utrecht',
        birthDate: '1982-11-30'
    },
    {
        id: 4,
        name: 'Alice Brown',
        status: 'Ziek',
        actions: ['Contact bedrijfsarts'],
        phone: '0645678901',
        address: 'Straat 4, Den Haag',
        birthDate: '1995-06-10'
    },
    {
        id: 5,
        name: 'Bob White',
        status: 'Gezond',
        actions: [],
        phone: '0656789012',
        address: 'Straat 5, Eindhoven',
        birthDate: '1988-09-25'
    },
    {
        id: 6,
        name: 'Charlie Green',
        status: 'Re-integratie',
        actions: ['Werkhervatting gesprek'],
        phone: '0667890123',
        address: 'Straat 6, Breda',
        birthDate: '1979-12-05'
    },
    {
        id: 7,
        name: 'Diana Black',
        status: 'Ziek',
        actions: ['Re-integratieplan'],
        phone: '0678901234',
        address: 'Straat 7, Groningen',
        birthDate: '1983-04-18'
    },
    {
        id: 8,
        name: 'Eve Blue',
        status: 'Gezond',
        actions: [],
        phone: '0689012345',
        address: 'Straat 8, Nijmegen',
        birthDate: '1992-01-27'
    },
    {
        id: 9,
        name: 'Frank Yellow',
        status: 'Re-integratie',
        actions: ['Eerste contact werkgever'],
        phone: '0690123456',
        address: 'Straat 9, Tilburg',
        birthDate: '1980-08-14'
    },
    {
        id: 10,
        name: 'Grace Red',
        status: 'Ziek',
        actions: ['Bedrijfsarts gesprek'],
        phone: '0611122233',
        address: 'Straat 10, Almere',
        birthDate: '1986-05-09'
    },
    {
        id: 11,
        name: 'Harry Orange',
        status: 'Gezond',
        actions: [],
        phone: '0622233344',
        address: 'Straat 11, Zwolle',
        birthDate: '1993-10-31'
    },
    {
        id: 12,
        name: 'Ivy Violet',
        status: 'Re-integratie',
        actions: ['Terugkeergesprek'],
        phone: '0633344455',
        address: 'Straat 12, Arnhem',
        birthDate: '1975-07-21'
    },
    {
        id: 13,
        name: 'Jack Cyan',
        status: 'Ziek',
        actions: ['Poortwachter traject'],
        phone: '0644455566',
        address: 'Straat 13, Apeldoorn',
        birthDate: '1984-02-11'
    },
    {
        id: 14,
        name: 'Kelly Brown',
        status: 'Gezond',
        actions: [],
        phone: '0655566677',
        address: 'Straat 14, Leiden',
        birthDate: '1996-09-16'
    },
    {
        id: 15,
        name: 'Leo Pink',
        status: 'Re-integratie',
        actions: ['Begeleidingstraject'],
        phone: '0666677788',
        address: 'Straat 15, Maastricht',
        birthDate: '1981-12-29'
    },
    {
        id: 16,
        name: 'Mia Silver',
        status: 'Ziek',
        actions: ['Medisch advies'],
        phone: '0677788899',
        address: 'Straat 16, Haarlem',
        birthDate: '1989-06-08'
    },
    {
        id: 17,
        name: 'Nathan Gold',
        status: 'Gezond',
        actions: [],
        phone: '0688899900',
        address: 'Straat 17, Amersfoort',
        birthDate: '1991-03-23'
    },
    {
        id: 18,
        name: 'Olivia Teal',
        status: 'Re-integratie',
        actions: ['Psychologisch consult'],
        phone: '0699900112',
        address: 'Straat 18, Dordrecht',
        birthDate: '1987-07-19'
    },
    {
        id: 19,
        name: 'Paul Indigo',
        status: 'Ziek',
        actions: ['Werkhervattingsplan'],
        phone: '0610101010',
        address: 'Straat 19, Zwolle',
        birthDate: '1980-11-03'
    },
    {
        id: 20,
        name: 'Quinn Lime',
        status: 'Gezond',
        actions: [],
        phone: '0620202020',
        address: 'Straat 20, Almelo',
        birthDate: '1994-05-14'
    },
    {
        id: 21,
        name: 'Rachel Navy',
        status: 'Re-integratie',
        actions: ['Coaching traject'],
        phone: '0630303030',
        address: 'Straat 21, Gouda',
        birthDate: '1978-04-07'
    },
    {
        id: 22,
        name: 'Steve Amber',
        status: 'Ziek',
        actions: ['Actieplan maken'],
        phone: '0640404040',
        address: 'Straat 22, Hoorn',
        birthDate: '1982-02-20'
    },
    {
        id: 23,
        name: 'Tina Coral',
        status: 'Gezond',
        actions: [],
        phone: '0650505050',
        address: 'Straat 23, Roosendaal',
        birthDate: '1997-09-09'
    },
    {
        id: 24,
        name: 'Ursula Turquoise',
        status: 'Re-integratie',
        actions: ['Gesprek met HR'],
        phone: '0660606060',
        address: 'Straat 24, Delft',
        birthDate: '1985-01-30'
    },
    {
        id: 25,
        name: 'Victor Burgundy',
        status: 'Ziek',
        actions: ['Ziekteverzuim traject'],
        phone: '0670707070',
        address: 'Straat 25, Deventer',
        birthDate: '1976-08-12'
    }
];

export default function useEmployees() {
    return { employees };
}
