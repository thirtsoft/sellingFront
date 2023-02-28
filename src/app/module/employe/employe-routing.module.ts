import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { DetailEmployeComponent } from './detail-employe/detail-employe.component';
import { EnvoiEmailToEmployeComponent } from './envoi-email-to-employe/envoi-email-to-employe.component';
import { EnvoiSMSToEmployeComponent } from './envoi-smsto-employe/envoi-smsto-employe.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListEmployeComponent,
  },
  {
    path: 'create',
    component: CreateEmployeComponent,
  },
  {
    path: 'edit',
    component: CreateEmployeComponent,
  },
  {
    path: 'detail',
    component: DetailEmployeComponent,
  },

  {
    path: 'envoieMailToEmploye',
    component: EnvoiEmailToEmployeComponent,
  },

  {
    path: 'envoieSmSToEmploye',
    component: EnvoiSMSToEmployeComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
