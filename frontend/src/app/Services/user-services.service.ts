import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import  Url  from './baseUrl'
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private _HttpCleint: HttpClient) { }

  signUp(data:any, link:string): Observable<any> {
    return this._HttpCleint.post(`${Url}/user/signup`,data, {
      headers: new HttpHeaders({
        redirectBaseLink: link
      })
    })
  }

  signIn(data:any):Observable<any> {
    return this._HttpCleint.post(`${Url}/user/signin`,data)
  }

  emailConfirmed(data:string): Observable<any> {
    return this._HttpCleint.get(`${Url}/user/verify/${data}`)
  }
}
