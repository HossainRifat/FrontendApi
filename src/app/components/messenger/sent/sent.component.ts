import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  msgData:any;
  data:any;
  constructor(private service:ApiServiceService) { }

  ngOnInit(): void {
    this.msgData=this.service.getCompanyName();
    console.log(this.msgData);
    if(this.msgData.SenderName == null){
      var s = this.msgData.Receiver.split(".", 2);
      console.log(this.msgData.Receiver,s[0]);
      this.service.gteConversation(s[0]).subscribe((data)=>{
        console.log(data);
        this.data=data;
      })
    }
    else{
      var s = this.msgData.Sender.split(".", 2);
      console.log(this.msgData.Sender,s[0]);
      this.service.gteConversation(s[0]).subscribe((data)=>{
        console.log(data);
        this.data=data;
      })
    }
    
  }

  printName(name:any){
    alert(name);
  }

}
