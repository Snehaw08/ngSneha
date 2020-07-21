import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-one',
  template: `<h1>lazy works</h1>`,
  styles: [],
})
export class LazyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
