import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { CreateAirlineComponent } from './create-airline/create-airline.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { AirlineDetailsComponent } from './airline-details/airline-details.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';

const routes: Routes = [
  {path: 'airlines', component: AirlineListComponent,canActivate:[AuthGaurdService]},
  {path: 'create-airline', component: CreateAirlineComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'update-airline/:flight_id', component: UpdateAirlineComponent,canActivate:[AuthGaurdService]},
  {path: 'airline-details/:flight_id', component: AirlineDetailsComponent,canActivate:[AuthGaurdService]},
  {path:'logout-page',component:LogoutPageComponent,canActivate:[AuthGaurdService]},
  {path:'feedback-form',component:FeedbackFormComponent,canActivate:[AuthGaurdService]},
  {path:'profile-card',component:ProfileCardComponent,canActivate:[AuthGaurdService]},
  {path:'contact-form',component:ContactFormComponent,canActivate:[AuthGaurdService]},
  {path:'contact-form',component:ContactFormComponent,canActivate:[AuthGaurdService]},
  {path:'sign-up',component:SignUpComponent},
  {path:'ticket-booking/:flight_id',component:TicketBookingComponent,canActivate:[AuthGaurdService]},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
