import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MassageServicesService } from '../Services/massage-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent {
  constructor(private _Route: ActivatedRoute,
    private _Router:Router,
     private msgService:MassageServicesService){}
  msgForm: FormGroup = new FormGroup({
    message: new FormControl('',[Validators.required, Validators.min(4), Validators.max(200)])
  })
  id: string = this._Route.snapshot.params['id']


  sendMsg(){
    this.msgService.sendMsg(this.msgForm.value, this.id).subscribe((data)=>{
      // console.log(data.msg);

      if (data.msg == 'success') {
      this._Router.navigate(['sent'])
      }
    })
  }
}
