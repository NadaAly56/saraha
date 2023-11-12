import { Component, OnInit } from '@angular/core';
import { MassageServicesService } from '../Services/massage-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiwmessage',
  templateUrl: './veiwmessage.component.html',
  styleUrls: ['./veiwmessage.component.css']
})
export class VeiwmessageComponent implements OnInit {
  constructor(private msgService:MassageServicesService,
    private _Route:ActivatedRoute){}

    id:string = this._Route.snapshot.params['id']
    token:string | null = localStorage.getItem('token')
    msgArr:any = []
    isLoading: boolean = false
    link:string = `http://localhost:4200/send/${this.id}`

    ngOnInit(): void {
      this.getUserMsg()
    }
  getUserMsg(){
    this.isLoading = true
    this.msgService.getUserMsgs(this.id, this.token).subscribe((data)=>{
      if (data.msg == 'success') {
        this.msgArr = data.msgs
        console.log(this.msgArr);
        this.isLoading = false
      }
    })
  }
  getID(id:string) {
    this.id = id
    console.log(this.id);

  }

  deleteMsg(id:string){
    this.isLoading = true
    this.msgService.deleteMsgs(id, this.token).subscribe((data)=>{
      if (data.msg == 'success') {
        console.log(data);

        this.getUserMsg()
      }
      this.isLoading = false
    })
  }

  // copyToClipboard(text:string){
  //   this.clipboard.writeText(text)
  //   console.log(this.clipboard.writeText(text));

  // }
}
