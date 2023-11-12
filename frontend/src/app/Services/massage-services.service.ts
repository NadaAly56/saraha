import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Url from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class MassageServicesService {

  constructor(private _HttpClient:HttpClient) { }

  sendMsg(data:string, id:string):Observable<any>{
    return this._HttpClient.post(`${Url}/message/${id}`, data)
  }

  getUserMsgs(data:string, token: any):Observable<any>{
    return this._HttpClient.get(`${Url}/message`, {
      headers: new HttpHeaders({
        'token': token
      })
    })
  }

  deleteMsgs(data:string, token: any):Observable<any>{
    console.log(typeof data);

    return this._HttpClient.delete(`${Url}/message`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token,
        'id':data
      })
    })
  }
}
