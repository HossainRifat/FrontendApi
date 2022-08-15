import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello_world application';
  logoimg:string = "assets/img/logo.png";

  constructor(private router:Router){}

  

}

