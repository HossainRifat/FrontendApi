import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SendOfferComponent } from '../send-offer/send-offer.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  data:any;
  constructor(private route:ActivatedRoute, private service:ApiServiceService, private dialog:MatDialog) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"]);
    this.service.getCompany(this.route.snapshot.params["id"]).subscribe((details)=>{
      this.data=details;
      console.log(this.data);
    })
  }

  openDialog(name:any){
    this.service.setCompanyName(name);
    this.dialog.open(SendOfferComponent);
  }

 
}
