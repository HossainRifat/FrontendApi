import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupsComponent implements OnInit {
  isSearch:boolean=false;
  search:any;
  Idea:any;
  constructor(private router: Router, private service:ApiServiceService) { }

  ngOnInit(): void {
    if(!this.isSearch){
      this.service.getIdea().subscribe((data:any)=>{
        this.Idea=data;
      },(error)=>{
        this.router.navigate(["login"]);
      });
    }
  }

  getDetails(company:string){
    localStorage.setItem("company_name",company);
    this.router.navigate(["company/"+company]);
  }

  getSearch(){
    this.isSearch=true;
    console.log(this.search);
    this.service.searchIdea(this.search).subscribe((data)=>{
      console.log(data);
      this.Idea=data;
      this.ngOnInit();
    },(error)=>{
      this.isSearch=false;
    })
    if(this.search == ''){
      this.isSearch = false;
      this.ngOnInit();
    }
  }

  sort(name:any){
    this.isSearch=true;
    console.log(name);
    this.service.sortIdea(name).subscribe((data)=>{
      this.Idea=data;
    },(error)=>{
      this.isSearch=false;
    });
  }

}
