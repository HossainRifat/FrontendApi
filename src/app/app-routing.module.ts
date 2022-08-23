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
import { StartupsComponent } from './components/startups/startups.component';
import { CompanyComponent } from './components/company/company.component';
import { SendOfferComponent } from './components/send-offer/send-offer.component';
import { OffersComponent } from './components/offers/offers.component';
import { SentComponent } from './components/messenger/sent/sent.component';
import { BasicMessageComponent } from './components/messenger/basic-message/basic-message.component';
import { MyinvestmentComponent } from './components/profile/myinvestment/myinvestment.component';
import { InhomeComponent } from './components/inhome/inhome.component';
import { ReportComponent } from './components/profile/report/report.component';
import { VerificationComponent } from './components/verification/verification.component';

const routes: Routes = [
  {path:"home",component:ListComponent},
  {path:"profile",component:ProfileComponent},
  {path:"profile/personal",component:PersonalComponent},
  {path:"profile/professional",component:ProfessionalComponent},
  {path:"profile/security",component:SecurityComponent},
  {path:"profile/myinvestment",component:MyinvestmentComponent},
  {path:"signup",component:SignupComponent},
  {path:"signup2",component:Signup2Component},
  {path:"signup3",component:Signup3Component},
  {path:"login",component:LoginComponent},
  {path:"startup",component:StartupsComponent},
  {path:"company/:id",component:CompanyComponent},
  {path:"sendoffer",component:SendOfferComponent},
  {path:"offers",component:OffersComponent},
  {path:"messenger",component:SentComponent},
  {path:"message",component:BasicMessageComponent},
  {path:"inhome",component:InhomeComponent},
  {path:"profile/report",component:ReportComponent},
  {path:"verification",component:VerificationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
