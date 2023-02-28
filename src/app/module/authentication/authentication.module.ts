import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ListRegisterComponent } from './list-register/list-register.component';
import { SigInComponent } from './sig-in/sig-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfilComponent } from './profil/profil.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateUsernameComponent } from './update-username/update-username.component';


@NgModule({
  declarations: [
    ListRegisterComponent,
    SigInComponent,
    SignInComponent,
    SignUpComponent,
    ProfilComponent,
    UpdatePasswordComponent,
    UpdateUsernameComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
