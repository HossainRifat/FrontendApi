import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  Code:any;
  var:any={
    Email:'',
    Code:''
  }
  constructor(private service:ApiServiceService,private dialog:MatDialog,public dialogRef: MatDialogRef<VerificationComponent>) { }

  ngOnInit(): void {
    
  }

  checkVerify(){
    this.dialogRef.close();
    this.var.Code = this.Code;
    this.var.Email = this.service.getCompanyName();
    console.log(this.var);
    this.service.checkVerification(this.var).subscribe((dt)=>{
      
      alert("Email Verified");
    },(er)=>{
      alert("something went wrong");
      console.log(er); 
    })
  }

}
