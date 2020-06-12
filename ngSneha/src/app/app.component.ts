import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tittle = 'App';
  arr = ['pune', 'mumbai', 'nashik'];

  cars = [
    {
      name: 'Hyundai',
      varient: 'Verna',
      car_color: 'red',
      year: 2018,
      instock: 5,
      country : 'South Korea',
      prices : 650000,
      canPurch: true,
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
    },
  ];
}
