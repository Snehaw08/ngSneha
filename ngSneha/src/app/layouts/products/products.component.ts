import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [`.card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}
.card {

...
  transition: 0.5s ease;
  cursor: pointer;
  margin:30px;
}
.container {
    width: 100%;
    background: url(https://cars.tatamotors.com/images/car-dot.png);
    
}
.card .card-content{
  background-color: #eee;
}
`],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  tittle = 'App';
  arr = ['pune', 'mumbai', 'nashik'];

  cars = [
    {
      name: 'Hyundai',
      varient: 'Verna',
      car_color: 'red',
      year: 2018,
      instock: 5,
      country: 'South Korea',
      prices: 650000,
      canPurch: true,
      thumurl: "assets/img/verna.webp"
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
      thumurl: "assets/img/city1.jpg"
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
      thumurl: "assets/img/ecosp.jpg"
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
      thumurl: "assets/img/baleno.jpg"
    },
  ];
}
