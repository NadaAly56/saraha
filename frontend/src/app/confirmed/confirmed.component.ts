import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../Services/user-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import Url from '../Services/baseUrl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {
  token:any = this.route.snapshot.params['token']
  constructor( private route: ActivatedRoute,
    private _UserService: UserServicesService){}
  ngOnInit(){
    this.confirmed()
  }
  confirmed(){
    this._UserService.emailConfirmed(this.token).subscribe()
  }
}
