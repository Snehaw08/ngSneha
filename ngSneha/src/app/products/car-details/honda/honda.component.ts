import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honda',
  templateUrl: './honda.component.html',
  styles: [
    `
      img {
        width: 50%;
        height: 300px;
      }
    `,
  ],
})
export class HondaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
