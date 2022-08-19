import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor2 } from 'src/app/model/investor2.model';
import { mainInvestor } from 'src/app/model/main_investor.model';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  User:any;
  edit:boolean=false;
  pro:mainInvestor={
    OrgName: '',
    OrgEstablished: '',
    OrgLocation: '',
    OrgEmail: '',
    OrgPhone: '',
    OrgLicense: '',
    Tin: '',
    OrgSite: '',
    FirstName: '',
    LastName: '',
    In_Email: '',
    Dob: '',
    Gender: '',
    Address: '',
    Phone: '',
    Nid: '',
    Img: '',
    Password: ''
  }
  constructor(private router: Router, private service:ApiServiceService) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe((data:any) =>
      {
        this.User = data;

        this.pro.OrgName=data.OrgName;
        this.pro.OrgEstablished=data.OrgEstablished;
        this.pro.OrgLocation=data.OrgLocation;
        this.pro.OrgEmail=data.OrgEmail;
        this.pro.OrgPhone=data.Phone;
        this.pro.OrgLicense=data.OrgLicense;
        this.pro.Tin=data.Tin;
        this.pro.OrgSite=data.OrgSite;

        this.pro.In_Email=data.In_Email;
        this.pro.FirstName=data.FirstName;
        this.pro.LastName=data.LastName;
        this.pro.Dob=data.Dob;
        this.pro.Gender=data.Gender;
        this.pro.Address=data.Address;
        this.pro.Phone=data.Phone;
        this.pro.Nid=data.Nid;
        this.pro.Img=data.Img;

        this.pro.Password=data.Password;

        console.log(this.pro);
      },(error)=>{
        console.log(error);
        this.router.navigate(['login']);
      })
  }

  goToProfessional(): void{
    this.router.navigate(['profile/professional'])
  }

  goToPersonal(): void{
    this.router.navigate(['profile/personal'])
  }

  goToSecurity(): void{
    this.router.navigate(['profile/security'])
  }

  goToMyIn(): void{
    this.router.navigate(['profile/myinvestment'])
  }

  openEdit(){
    if(this.edit){
      console.log("it is true");
      this.edit=false;
    }
    else{
      console.log("it is false");
      this.edit=true;
    }
  }

  updateInvestor(){
    this.service.updateInvestor(this.pro).subscribe((data)=>
    {
      //this.router.navigate(['profile/personal']);
      this.edit=false;
      this.ngOnInit();
    },(error)=>{
      console.log(error);
    })
  }

}
