import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  msg:any;
  constructor(private service:ApiServiceService, private router:Router,public dialogRef: MatDialogRef<InboxComponent>) { }

  ngOnInit(): void {
    this.service.gteMessage().subscribe((data)=>{
      this.msg=data;
      console.log(data);
    },(error)=>{
      console.log(error);
      //this.router.navigate(["login"]);
    })
  }

  mainMsg(data:any){
    this.service.setCompanyName(data);
    console.log(data);
    this.router.navigate(["messenger"]);
    this.dialogRef.close(["inbox"]);
  }

}
