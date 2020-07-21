import { RoleService } from './../../services/role.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  body {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    main {
      flex: 1 0 auto;
    }

    body {
      background: #fff;
    }

    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=email]:focus + label,
    .input-field input[type=password]:focus + label {
      color: #e91e63;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=email]:focus,
    .input-field input[type=password]:focus {
      border-bottom: 2px solid #e91e63;
      box-shadow: none;
    }`],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private roleService:RoleService, private  router:Router) { }

  msg;

  ngOnInit(): void {
  }
  check(uname:string ,p:string){
   

    if (this.authService.checkUserNameAndPassword(uname, p)){
      this.router.navigate(['../dashboard']);
    }
    else if (this.roleService.checkUserNameAndPassword(uname, p)){
      this.router.navigate(['../user/']);
    }
    else{
      this.msg="Invalid username or password";
    }
  }

}
