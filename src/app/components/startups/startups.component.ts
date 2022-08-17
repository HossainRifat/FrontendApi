import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {

  Idea:any;
  constructor(private router: Router, private service:ApiServiceService) { }

  ngOnInit(): void {
    this.Idea = this.service.getIdea();
  }

  getDetails(company:string){
    localStorage.setItem("company_name",company);
    this.router.navigate(["company/"+company]);
  }

}