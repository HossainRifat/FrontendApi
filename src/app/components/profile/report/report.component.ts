import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  report:any={
    Receiver:'sazzad.sua@gmail.com',
    Title:'',
    Description:''
  }

  User:any;
  constructor(private router: Router, private service:ApiServiceService) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe((data)=>{
      this.User=data;
    },(error)=>{
      this.router.navigate(['login'])
      console.log(error);
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

  goToMyIn(): void{
    this.router.navigate(['profile/myinvestment'])
  }

  goToReport(): void{
    this.router.navigate(['profile/report'])
  }

  createReport(){
    console.log(this.report);
    this.service.createReport(this.report).subscribe((data)=>{
      alert("Report Sent");
      this.report = {
        Receiver:'sazzad.sua@gmail.com',
        Title:'',
        Description:''
      }
      this.ngOnInit();
    },(error)=>{
      alert("Something went wrong");
      console.log(error);
    })
  }

  cancel(){
    this.report = {
      Receiver:'sazzad.sua@gmail.com',
      Title:'',
      Description:''
    }
    this.ngOnInit();
  }


}
