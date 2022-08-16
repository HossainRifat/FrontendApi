import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  User:any;
  constructor(private router: Router, private service:ApiServiceService) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe(data =>
      {
        this.User = data;
        console.log(data);
      },(error)=>{
        console.log(error);
        this.router.navigate(['login']);
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
