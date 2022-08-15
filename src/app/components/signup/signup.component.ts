import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Investor } from 'src/app/model/investor.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  getReg1: any={};
  user:any={};
  addInvestor: Investor ={
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

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.addInvestor = JSON.parse(localStorage.getItem("reg1") || '{}');
  }


  addInvestorP(){
    console.log(this.addInvestor);
    this.user = Object.assign(this.user,this.addInvestor);
    localStorage.setItem("reg1",JSON.stringify(this.user));
    this.router.navigate(['signup2'])
  }

}
