import { assertPlatform, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Message } from 'src/app/model/message.model';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SendOfferComponent } from '../../send-offer/send-offer.component';

@Component({
  selector: 'app-basic-message',
  templateUrl: './basic-message.component.html',
  styleUrls: ['./basic-message.component.css']
})
export class BasicMessageComponent implements OnInit {
  name:any;
  msg:Message={
    Receiver: '',
    Message: ''
  }
  constructor(private service:ApiServiceService,public dialogRef: MatDialogRef<SendOfferComponent>,) { }

  ngOnInit(): void {
    this.name=this.service.getCompanyName();
    this.msg.Receiver=this.name.En_Post_Email;
  }

  createMessage(){
    console.log(this.msg);
    this.service.createMessage(this.msg).subscribe((data)=>{
      console.log("Sent");
      this.dialogRef.close();
    },(error)=>{
      alert("Something went wrong!!!");
      console.log(error);
    })
  }
}
