import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _Router:Router){}
  isSigned():boolean {
    return localStorage.getItem('token')?true:false
  }
  signOut() {
    localStorage.removeItem('token')
    this._Router.navigate(['signin'])
  }
}
