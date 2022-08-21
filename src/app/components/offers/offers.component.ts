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

  myoffer:any;
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
    //this.offer=this.service.getOffer(this.name.PostId);
    this.service.getOffer(this.name.PostId).subscribe((data)=>{
      this.offer=data;
      this.myoffer=this.service.getOfferByCompany(this.name.PostId);
    })

    // console.log(this.name);
    // this.myoffer=this.service.getMyOffer().subscribe((data)=>{
    //   console.log(data);
    // })
  }

  deleteOffer(data:any){
    this.service.deleteOffer(data).subscribe((val)=>{
      this.ngOnInit();
    },(error)=>{
      alert("Something went wrong");
      console.log(error);
    })
  }

  

}
