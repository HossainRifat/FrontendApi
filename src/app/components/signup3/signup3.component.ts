import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.component.html',
  styleUrls: ['./signup3.component.css']
})
export class Signup3Component implements OnInit {

  pass:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToSignup2(): void{
    this.router.navigate(['signup2'])
  }

  createInvestor(){
    console.log(this.pass);
  }
}
