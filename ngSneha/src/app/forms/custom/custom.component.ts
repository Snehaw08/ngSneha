import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  
})
export class CustomComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: ['', Validators.required],
      comparepassword: ['', comparepassword]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

function comparepassword(control: AbstractControl): ValidationErrors {
  if (control.parent != undefined) {
    var password: string = control.parent.get("password").value;
    var cpassword: string = control.parent.get("comparepassword").value;
    if (password !== cpassword) {
      return { matchPassword: true };
    }
  }
  return null;
}