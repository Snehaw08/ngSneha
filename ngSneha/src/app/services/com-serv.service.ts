import { Injectable } from '@angular/core';
import { DBCARDET } from '../databases/db-car';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComServ{

  constructor( private http: Http) { }
  getCarDetails(){
    return this.http.get('../../assets/API/car-data.json').pipe(map(res=>res.json().carAPI));
  }
}
