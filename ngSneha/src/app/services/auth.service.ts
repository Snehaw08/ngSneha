import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkUserNameAndPassword(uname:string,pwd:string){
    if(uname=="sneha" && pwd=="sneha"){
      localStorage.setItem("username","sneha");
      return true;
}else{
      return false;
    }
  }
}
