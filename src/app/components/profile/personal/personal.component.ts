import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Investor } from 'src/app/model/investor.model';
import { mainInvestor } from 'src/app/model/main_investor.model';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
  personal:mainInvestor={
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
  User:any;
  edit:boolean=false;
  constructor(private router: Router, private service:ApiServiceService) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe((data:any) =>
      {
        this.User=data;
        this.personal.FirstName=data.FirstName;
        this.personal.LastName=data.LastName;
        this.personal.In_Email=data.In_Email;
        this.personal.Dob = data.Dob;
        this.personal.Gender=data.Gender;
        this.personal.Address=data.Address;
        this.personal.Phone=data.Phone;
        this.personal.Nid=data.Nid;
        this.personal.Img=data.Img;

        this.personal.OrgName=data.OrgName;
        this.personal.OrgEstablished=data.OrgEstablished;
        this.personal.OrgLocation=data.OrgLocation;
        this.personal.OrgEmail=data.OrgEmail;
        this.personal.OrgPhone=data.OrgPhone;
        this.personal.OrgLicense=data.OrgLicense;
        this.personal.Tin=data.Tin;
        this.personal.OrgSite=data.OrgSite;

        this.personal.Password=data.Password;

        console.log(this.personal);
      },(error)=>{
        this.router.navigate(['login'])
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
    this.service.updateInvestor(this.personal).subscribe((data)=>
    {
      //this.router.navigate(['profile/personal']);
      this.edit=false;
      this.ngOnInit();
    },(error)=>{
      console.log(error);
    })
  }

  logout(){
    this.service.Logout().subscribe((data)=>{
      localStorage.clear();
      this.router.navigate(["login"]);
    })
  }

}
