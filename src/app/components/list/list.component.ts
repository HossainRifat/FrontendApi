import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  InvestorList$!:Observable<any[]>;
  IdeaConfirmed$!:Observable<any[]>;
  constructor(private router: Router, private service:ApiServiceService) {
   

    //map to 
   }

  ngOnInit(): void {
    //this.InvestorList$ = this.service.getInvestorList();
    this.IdeaConfirmed$ = this.service.getConfirmedIdea();
  }

  goToSignup(): void{
    this.router.navigate(['signup'])
  }

  goToLogin(): void{
    this.router.navigate(['login'])
  }

  SetSession(){
    sessionStorage.setItem("email","rh140025@gmail");
  }

}
