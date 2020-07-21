import { AllMaterialModule } from './../../modules/all-material.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl:'./nav.component.html',
  styleUrls: [],
})
export class NavComponent  {

  logout() {
    localStorage.removeItem('username');
  }
  isLogin() {
    if(localStorage.getItem('username')!=null) return true;
    return false;
  }
}
