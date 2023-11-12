import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from '../Services/user-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  loading:boolean = false
  available:boolean = true
  redirectBaseLink = 'http://localhost:4200/verify/'
  constructor(private _UserService:UserServicesService, private _Router:Router){}

  signUpForm:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)]),
    age: new FormControl(0, [Validators.required, Validators.min(10), Validators.max(60)]),
  })

  signUp(){
    this.loading = true
    this._UserService.signUp(this.signUpForm.value, this.redirectBaseLink).subscribe((data)=>{
      if (data.msg === 'success') {
        this._Router.navigate(['confirmalert'])
      }
      else {
        this.available = false
      }
      this.loading = false
    })
  }
}
