import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { WomendetailsComponent } from './womendetails/womendetails.component';
import { MendetailsComponent } from './mendetails/mendetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { BagComponent } from './bag/bag.component';
import { KidsComponent } from './kids/kids.component';
import { KidsdetailsComponent } from './kidsdetails/kidsdetails.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    WomenComponent,
    WomendetailsComponent,
    MendetailsComponent,
    ContactusComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    BagComponent,
    KidsComponent,
    KidsdetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
