import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor() { }

    checkUserNameAndPassword(uname: string, pwd: string) {
        if (uname == "user" && pwd == "user") {
            localStorage.setItem("username", "user");
            return true;
        } else {
            return false;
        }
    }
}
