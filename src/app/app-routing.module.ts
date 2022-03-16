import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from './bag/bag.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { KidsdetailsComponent } from './kidsdetails/kidsdetails.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { MendetailsComponent } from './mendetails/mendetails.component';
import { SignupComponent } from './signup/signup.component';
import { WomenComponent } from './women/women.component';
import { WomendetailsComponent } from './womendetails/womendetails.component';

const routes: Routes = [
  {path:'men',component:MenComponent},
  {path:'men/:id',component:MendetailsComponent},
  {path:'women',component:WomenComponent},
  {path:'women/:id',component:WomendetailsComponent},
  {path:'kids',component:KidsComponent},
  {path:'kids/:id',component:KidsdetailsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'bag',component:BagComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
