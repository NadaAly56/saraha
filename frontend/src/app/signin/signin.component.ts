import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServicesService } from '../Services/user-services.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  msg:string=''
signInForm:FormGroup = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)])
})

  constructor(private userSrvice:UserServicesService, private _Router:Router ){}

  signIn(){
     this.userSrvice.signIn(this.signInForm.value).subscribe((data)=>{
      if (data.msg === 'success') {
        if (!data.user.emailConfirmed) {
          this.msg = 'You need to confirm your email, please check your email and confirm your account'
        }
        else {
          localStorage.setItem('token', data.token)
          this._Router.navigate([`profile/${data.user._id}`])
        }
      }
      else {
        this.msg = 'Email or password is not valid'
      }
    })
  }
}
