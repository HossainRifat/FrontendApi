import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/model/offer.model';
import { ApiServiceService } from 'src/app/services/api-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-send-offer',
  templateUrl: './send-offer.component.html',
  styleUrls: ['./send-offer.component.css']
})
export class SendOfferComponent implements OnInit {
  name:any;
  offer:Offer={
    En_Email: '',
    Title: '',
    Description: '',
    Ideas_Id: 0,
    Offered_Share: '',
    Offered_Amount: ''
  }
  constructor(private service:ApiServiceService,public dialogRef: MatDialogRef<SendOfferComponent>,) { }

  ngOnInit(): void {
    this.name=this.service.getCompanyName();
  }

  createOffer(){
    this.offer.En_Email=this.name.En_Post_Email;
    this.offer.Ideas_Id=this.name.PostId;
    console.log(this.offer);
    this.service.createOffer(this.offer).subscribe((data)=>{
      console.log("data inserted");
    },(error)=>{
      console.log(error);
    });
    this.dialogRef.close();
  }

}
