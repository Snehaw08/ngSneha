import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl:'./template.component.html',
  styles: [],
})
export class TemplateComponent {
  cities = [
    { code: 1, name: 'Pune' },
    { code: 2, name: 'Mumbai' },
    { code: 3, name: 'Nagpur' },
    { code: 4, name: 'Nashik' },
    ,
  ];

  log(tempVar) {
    console.clear();
    console.log(tempVar);
    console.log(tempVar.value);
  }

  showForm(fTempVar) {
    console.clear();

    console.log(fTempVar);
  }
}
