import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { VeiwmessageComponent } from './veiwmessage/veiwmessage.component';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { MessageSentComponent } from './message-sent/message-sent.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { authGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'signin', pathMatch:'full', title:'signin'},
  {path:'signin',  component:SigninComponent},
  {path:'signup',  component:SignupComponent},
  {path:'send/:id',  component:SendmessageComponent},
  {path:'profile/:id', canActivate:[authGuard],  component:VeiwmessageComponent},
  {path:'confirmalert',  component:ConfirmAlertComponent},
  {path:'sent',  component:MessageSentComponent},
  {path:'notallowed',  component:NotAllowedComponent},
  {path:'verify/:token',  component:ConfirmedComponent},
  {path:'**',  component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
