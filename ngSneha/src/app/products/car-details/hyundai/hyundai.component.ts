import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-hyundai',
  templateUrl: './hyundai.component.html',
  styles: [
    `.nav{
      background-color: #009688 !important;
    }
    .card:hover {
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
    width: 95%;    
}
.card .card-content{
  background-color: #eee;
}
  h1 span:before,
      h1 span:after {
        content: '';
        position: absolute;
        border-style: solid;
        border-color: #a7cecc transparent transparent transparent;
        top: -6px;
        transform: rotate(180deg);
      }
      h1 span:before {
        left: 0;
        border-width: 6px 0 0 6px;
      }
      h1 span:after {
        right: 0;
        border-width: 6px 6px 0 0;
      }
      .ribbon {
        width: 48%;
        height: 400px;
        position: relative;
        float: left;
        margin-bottom: 30px;
       
        background-size: cover;
        text-transform: uppercase;
        color: white;
      }
     
      

      .wrap {
        width: 100%;
        height: 188px;
        position: absolute;
        top: -8px;
        left: 8px;
        overflow: hidden;
      }
      .wrap:before,
      .wrap:after {
        content: '';
        position: absolute;
      }
      .wrap:before {
        width: 40px;
        height: 8px;
        right: 100px;
        background: #4d6530;
        border-radius: 8px 8px 0px 0px;
      }
      .wrap:after {
        width: 8px;
        height: 40px;
        right: 0px;
        top: 100px;
        background: #4d6530;
        border-radius: 0px 8px 8px 0px;
      }
      .ribbon6 {
        width: 200px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        top: 30px;
        right: -50px;
        z-index: 2;
        overflow: hidden;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        border: 1px dashed;
        box-shadow: 0 0 0 3px #57dd43, 0px 21px 5px -18px rgba(0, 0, 0, 0.6);
        background: #57dd43;
        text-align: center;
      }
`,
  ],
})
export class HyundaiComponent implements OnInit {
  cars: any[];

  constructor(private angularFireDatabase: AngularFireDatabase) {
    angularFireDatabase
      .list('/carAPI')
      .valueChanges()
      .subscribe((cars) => {
        this.cars = cars;
      
        console.log(this.cars);
      });
  }
  ngOnInit(): void {}
  addQuantity(cars) {
    if (cars.quantity < cars.instock) cars.quantity++;
  }

  removeQuantity(cars) {
    if (cars.quantity != 0) cars.quantity--;
  }
  catchVal(eve) {
    console.log('we r in event');
  }
}
