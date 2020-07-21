import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [` .card:hover {
  transform: scale(1.15);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
}
.card {

...
  transition: 0.5s ease;
  cursor: pointer;
  margin:30px;
}
// main{
//   background-image: url("data:image/png;base64,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");
// }
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
        box-shadow: 0 0 0 3px rgba(0,0,0,0.2), 0px 21px 5px -18px rgba(0, 0, 0, 0.6);
        background: rgba(255,255,255,0.7);
        text-align: center;
      }
      .product_view .modal-dialog{max-width: 800px; width: 100%;}
        .pre-cost{text-decoration: line-through; color: #a5a5a5;}
        .space-ten{padding: 10px 0;}
     `,
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
