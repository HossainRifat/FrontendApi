import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from '../app/components/list/list.component';
import { PersonalComponent } from './components/profile/personal/personal.component';
import { ProfessionalComponent } from './components/profile/professional/professional.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SecurityComponent } from './components/profile/security/security.component';
import { SignupComponent } from './components/signup/signup.component';
import { Signup2Component } from './components/signup2/signup2.component';
import { Signup3Component } from './components/signup3/signup3.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"home",component:ListComponent},
  {path:"profile",component:ProfileComponent},
  {path:"profile/personal",component:PersonalComponent},
  {path:"profile/professional",component:ProfessionalComponent},
  {path:"profile/security",component:SecurityComponent},
  {path:"signup",component:SignupComponent},
  {path:"signup2",component:Signup2Component},
  {path:"signup3",component:Signup3Component},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
