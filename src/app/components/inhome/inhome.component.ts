import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-inhome',
  templateUrl: './inhome.component.html',
  styleUrls: ['./inhome.component.css']
})
export class InhomeComponent implements OnInit {

  User:any;
  InvestorList$!:Observable<any[]>;
  IdeaConfirmed$!:Observable<any[]>;
  constructor(private router: Router, private service:ApiServiceService) {
   

    //map to 
   }

  ngOnInit(): void {
    //this.InvestorList$ = this.service.getInvestorList();
    this.service.getProfile().subscribe((data)=>{
      this.User=data;
      this.getIdea();
    },(error)=>{
      this.router.navigate(["login"]);
    })
    
  }

  getIdea(){
    this.IdeaConfirmed$ = this.service.getConfirmedIdea();
  }

  goToLogin(): void{
    this.router.navigate(['startup'])
  }

  SetSession(){
    sessionStorage.setItem("email","rh140025@gmail");
  }

  getDetails(company:string){
    localStorage.setItem("company_name",company);
    this.router.navigate(["company/"+company]);
  }
}
