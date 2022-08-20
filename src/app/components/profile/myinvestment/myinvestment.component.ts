import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-myinvestment',
  templateUrl: './myinvestment.component.html',
  styleUrls: ['./myinvestment.component.css']
})
export class MyinvestmentComponent implements OnInit {
  User:any;
  IdeaConfirmed:any;
  constructor(private router:Router, private service:ApiServiceService) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe((data)=>{
      this.User=data;
      this.getIdea();
    },(error)=>{
      this.router.navigate(["login"]);
    })
    
  }

  getIdea(){
    this.IdeaConfirmed = this.service.getMyConfirmedIdea();
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

  getDetails(company:string){
    localStorage.setItem("company_name",company);
    this.router.navigate(["company/"+company]);
  }

  download(){
    this.service.download().subscribe((data)=>{
      alert(data);
    },(error)=>{
      alert("Something went wrong.");
      console.log(error);
    })
  }
}
