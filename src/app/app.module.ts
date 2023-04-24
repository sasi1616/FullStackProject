import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { CreateAirlineComponent } from './create-airline/create-airline.component';
import { AirlineDetailsComponent } from './airline-details/airline-details.component';
import { AirlineListComponent } from './airline-list/airline-list.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAirlineComponent,
    AirlineDetailsComponent,
    AirlineListComponent,
    UpdateAirlineComponent,
    LoginPageComponent,
    LogoutPageComponent,
    FeedbackFormComponent,
    ProfileCardComponent,
    ContactFormComponent,
    SignUpComponent,
    TicketBookingComponent,
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
