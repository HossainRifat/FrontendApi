import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login={
    Username: '',
    Password: ''
  }
  auth:any={};
  errorMsg:any;
  constructor(private inService:ApiServiceService,private router:Router) { }

  ngOnInit(): void {
    this.auth=localStorage.getItem('auth');
    if(this.auth){
      this.router.navigate(["profile/personal"]);
    }
  }

  InLogin(){
    console.log(this.login);
    this.inService.login(this.login).subscribe((auth) =>
      {
        console.log(auth);
        localStorage.setItem("auth",auth);
        this.router.navigate(["profile/personal"]);
      },(error) => {
        this.errorMsg=error;
        console.log(error.error);
      })
  
  }

}
