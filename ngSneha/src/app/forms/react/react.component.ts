import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
})
export class ReactComponent {
  countryList = [
    { id: 1, name: 'Pune' },
    { id: 2, name: 'Mumbai' },
    { id: 3, name: 'Nagpur' },
    { id: 4, name: 'Nashik' },
    ,
  ];
  
  formObj = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("^[a-zA-Z]+$")] ),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gen:new FormControl('',Validators.required),
    isMarried1:new FormControl('',Validators.required),
    country1: new FormControl('',Validators.required),
    address:new FormGroup({
      city: new FormControl('',[Validators.required]),
      street: new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required])

    })
  });
  get uName(){
   return this.formObj.get('userName')
  }
  get pass() {
    return this.formObj.get('password')
  }
  get gen() {
    return this.formObj.get('gender');
  }

  get isMarried() {
    return this.formObj.get('isMarried1');
  }

  get country() {
    return this.formObj.get('country1');
  }

  get city() {
    return this.formObj.get("address").get('city');
  }

  get street() {
    return this.formObj.get("address").get('street');
  }

  get pincode() {
    return this.formObj.get("address").get('pincode');
  }


 

  onSubmit() {
    console.log(this.formObj.value);
  }

}





