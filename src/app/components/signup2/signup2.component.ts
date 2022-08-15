import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor2 } from 'src/app/model/investor2.model';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {

  user:any={};
  addInvestor2:Investor2 = {
    OrgName: '',
    OrgEstablished: '',
    OrgLocation: '',
    OrgEmail: '',
    OrgPhone: '',
    OrgLicense: '',
    Tin: '',
    OrgSite: ''
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.addInvestor2 = JSON.parse(localStorage.getItem("reg2") || '{}');
  }

  addInvestorP2(){
    console.log(this.addInvestor2);
    this.user = Object.assign(this.user,this.addInvestor2);
    localStorage.setItem("reg2",JSON.stringify(this.user));
    this.router.navigate(['signup3'])
  }

  goToSignup(): void{
    this.router.navigate(['signup'])
  }

  
}
