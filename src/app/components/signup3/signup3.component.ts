import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { Investor } from 'src/app/model/investor.model';
import { Investor2 } from 'src/app/model/investor2.model';
import { mainInvestor } from 'src/app/model/main_investor.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.component.html',
  styleUrls: ['./signup3.component.css']
})
export class Signup3Component implements OnInit {

  investor:Investor={
    FirstName: '',
    LastName: '',
    In_Email: '',
    Dob: '',
    Gender: '',
    Address: '',
    Phone: '',
    Nid: '',
    Img: ''
  }
  investor2:Investor2={
    OrgName: '',
    OrgEstablished: '',
    OrgLocation: '',
    OrgEmail: '',
    OrgPhone: '',
    OrgLicense: '',
    Tin: '',
    OrgSite: ''
  }
  investor3:mainInvestor={
    FirstName: '',
    LastName: '',
    In_Email: '',
    Dob: '',
    Gender: '',
    Address: '',
    Phone: '',
    Nid: '',
    Img: '',
    OrgName: '',
    OrgEstablished: '',
    OrgLocation: '',
    OrgEmail: '',
    OrgPhone: '',
    OrgLicense: '',
    Tin: '',
    OrgSite: '',
    Password: ''
  }
  pass3:any;
  constructor(private router:Router,private inService:ApiServiceService) { }

  ngOnInit(): void {
  }

  goToSignup2(): void{
    this.router.navigate(['signup2'])
  }

  createInvestor(){
    
    this.investor=JSON.parse(localStorage.getItem("reg1") || '{}');
    this.investor2=JSON.parse(localStorage.getItem("reg2") || '{}');

    this.investor3.FirstName=this.investor.FirstName;
    this.investor3.LastName=this.investor.LastName;
    this.investor3.In_Email=this.investor.In_Email;
    this.investor3.Dob=this.investor.Dob;
    this.investor3.Gender=this.investor.Gender;
    this.investor3.Address=this.investor.Address;
    this.investor3.Phone=this.investor.Phone;
    this.investor3.Nid=this.investor.Nid;
    this.investor3.Img=this.investor.Img;

    this.investor3.OrgName=this.investor2.OrgName;
    this.investor3.OrgEstablished=this.investor2.OrgEstablished;
    this.investor3.OrgLocation=this.investor2.OrgLocation;
    this.investor3.OrgEmail=this.investor2.OrgEmail;
    this.investor3.OrgPhone=this.investor2.OrgPhone;
    this.investor3.OrgLicense=this.investor2.OrgLicense;
    this.investor3.Tin=this.investor2.Tin;
    this.investor3.OrgSite=this.investor2.OrgSite;

    this.investor3.Password = this.pass3;

    console.log(this.investor3);
    this.inService.createInvestorList(this.investor3).subscribe({
      next:(mainInvestor) =>{
        //console.log(mainInvestor);
        this.router.navigate(["login"]);
      }
    });
  }
}
