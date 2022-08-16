import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
  User:any;
  constructor(private router: Router, private service:ApiServiceService) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe((data) =>
      {
        this.User = data;
        console.log(data);
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

  

}
