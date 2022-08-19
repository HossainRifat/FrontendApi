import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SendOfferComponent } from '../send-offer/send-offer.component';
import {MatDialog} from '@angular/material/dialog';
import { OffersComponent } from '../offers/offers.component';
import { BasicMessageComponent } from '../messenger/basic-message/basic-message.component';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  data:any;
  constructor(private route:ActivatedRoute, private service:ApiServiceService, private dialog:MatDialog, private router:Router) { }

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

  openOffer(name:any){
    this.service.setCompanyName(name);
    this.dialog.open(OffersComponent);
  }
 
  openMessage(name:any){
    this.service.setCompanyName(name);
    this.dialog.open(BasicMessageComponent);
  }

  confirmDeal(data:any){
    this.service.conFirmIdea(data).subscribe((data)=>{
      this.router.navigate(["profile/personal"]);    
    },(error)=>{
      console.log(error);
    })
  }

}
