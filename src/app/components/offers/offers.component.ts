import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/model/offer.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  name:any;
  offer:any;
  constructor(private route:Router,private service:ApiServiceService) { }

  ngOnInit(): void {
    // this.service.getOffer().subscribe((data=>{
    //   console.log(data);
    //   this.offer=data;
    // }),(error)=>{
    //   console.log(error);
    // })
    this.name=this.service.getCompanyName();
    console.log(this.name.PostId);
    this.offer=this.service.getOffer(this.name.PostId);
    console.log(this.name);
    //this.getMyOffer();
    
  }

}
