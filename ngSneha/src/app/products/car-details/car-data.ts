

import { carsDet} from 'src/app/Models/car-details'

export const CARDET: carsDet[] = [
    {
        name: 'Hyundai',
        varient: 'Verna',
        car_color: 'red',
        year: 2018,
        instock: 1500,
        country: 'South Korea',
        prices: 650000,
        canPurch: true, 
        thumurl: 'assets/img/verna.webp',
        quantity: 0,
    },
    {
        name: 'Honda',
        varient: 'City',
        car_color: 'hotpink',
        year: 2016,
        instock: 0,
        country: 'Japan',
        prices: 700000,
        canPurch: false,
        thumurl: 'assets/img/city1.jpg',
        quantity: 0,
    },
 
    {
        name: 'Ford',
        varient: 'ecosport',
        car_color: 'green',
        year: 2014,
        instock: 3,
        country: 'UK',
        prices: 950000,
        canPurch: true,
        thumurl: 'assets/img/ecosp.jpg',
        quantity: 0,
    
    },
    {
        name: 'MarutiSuzuki',
        varient: 'Baleno',
        car_color: 'blue',
        year: 2012,
        instock: 1,
        country: 'India',
        prices: 450000,
        canPurch: true,
        thumurl: 'assets/img/baleno.jpg',
        quantity: 0,
    },
    
];