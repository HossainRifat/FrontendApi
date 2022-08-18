import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { PersonalComponent } from './components/profile/personal/personal.component';
import { ProfessionalComponent } from './components/profile/professional/professional.component';
import { SecurityComponent } from './components/profile/security/security.component';

//me
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ApiServiceService} from './services/api-service.service';
import { SignupComponent } from './components/signup/signup.component';
import { Signup2Component } from './components/signup2/signup2.component';
import { Signup3Component } from './components/signup3/signup3.component';
import { InboxComponent } from './components/messenger/inbox/inbox.component';
import { SentComponent } from './components/messenger/sent/sent.component';
import { LoginComponent } from './components/login/login.component';
import { StartupsComponent } from './components/startups/startups.component';
import { CompanyComponent } from './components/company/company.component';
import { OffersComponent } from './components/offers/offers.component';
import { SendOfferComponent } from './components/send-offer/send-offer.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BasicMessageComponent } from './components/messenger/basic-message/basic-message.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ProfileComponent,
    PersonalComponent,
    ProfessionalComponent,
    SecurityComponent,
    SignupComponent,
    Signup2Component,
    Signup3Component,
    InboxComponent,
    SentComponent,
    LoginComponent,
    StartupsComponent,
    CompanyComponent,
    OffersComponent,
    SendOfferComponent,
    BasicMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSliderModule,
    MatCheckboxModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
  
  entryComponents:[
    SendOfferComponent,
    OffersComponent,
    BasicMessageComponent
  ]
})
export class AppModule { }
