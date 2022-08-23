import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { VerificationComponent } from '../verification/verification.component';

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
  var:any={
    Email:''
  }
  auth:any={};
  errorMsg:any;
  show:boolean=false;
  constructor(private inService:ApiServiceService,private router:Router,private dialog:MatDialog,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.auth=localStorage.getItem('auth');
    if(this.auth){
      this.router.navigate(["profile/personal"]);
    }
  }

  InLogin(){
    console.log(this.login);
    this.var.Email = this.login.Username;
    this.inService.createVerification(this.var).subscribe((data)=>{
      //alert("Mail sent");
      this.inService.setCompanyName(this.var.Email);
      this.dialog.open(VerificationComponent);
    },(er)=>{
      this.inService.login(this.login).subscribe((auth) =>
      {
        console.log(auth);
        localStorage.setItem("auth",auth);
        this.router.navigate(["profile/personal"]);
      },(error) => {
        this.errorMsg=error;
        console.log(error.error);
      })
      console.log("already verified");
      console.log(er);
    })
    // this.inService.login(this.login).subscribe((auth) =>
    //   {
    //     console.log(auth);
    //     localStorage.setItem("auth",auth);
    //     this.router.navigate(["profile/personal"]);
    //   },(error) => {
    //     this.errorMsg=error;
    //     console.log(error.error);
    //   })
  
  }

  showPass(){
    if(this.show){
      this.show= false;
    }
    else{
      this.show=true;
    }
  }

  home(){
    this.router.navigate(['']);
  }

}
