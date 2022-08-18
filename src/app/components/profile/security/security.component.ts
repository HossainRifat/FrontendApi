import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { mainInvestor } from 'src/app/model/main_investor.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  edit:boolean=false;
  passShow:boolean=false;
  User:any;

  newPass:any={
    new:'',
    conNew:''
  }
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
  constructor(private router:Router, private service:ApiServiceService) { }

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

  showPass(){
    if(this.passShow){
      this.passShow=false;
    }
    else{
      this.passShow=true;
    }
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
    console.log(this.newPass);
    this.personal.Password=this.newPass.new;
    console.log(this.personal);
    this.service.updateInvestor(this.personal).subscribe((data)=>
    {
      //this.router.navigate(['profile/personal']);
      this.edit=false;
      this.ngOnInit();
    },(error)=>{
      console.log(error);
    })
  }
}
