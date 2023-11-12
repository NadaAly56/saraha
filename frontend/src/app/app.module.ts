import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { VeiwmessageComponent } from './veiwmessage/veiwmessage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { MessageSentComponent } from './message-sent/message-sent.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    SendmessageComponent,
    VeiwmessageComponent,
    NavbarComponent,
    ConfirmAlertComponent,
    ConfirmedComponent,
    MessageSentComponent,
    NotAllowedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
