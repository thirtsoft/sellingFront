import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRegisterComponent } from './list-register/list-register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateUsernameComponent } from './update-username/update-username.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'list',
    component: ListRegisterComponent,
  },

  {
    path: 'updateUsername',
    component: UpdateUsernameComponent,
  },

  {
    path: 'updatePassword',
    component: UpdatePasswordComponent,
  },

 
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
