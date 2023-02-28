import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { EnvoiEmailToClientComponent } from './envoi-email-to-client/envoi-email-to-client.component';
import { EnvoiSMSToClientComponent } from './envoi-smsto-client/envoi-smsto-client.component';
import { ListClientComponent } from './list-client/list-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListClientComponent,
  },
  {
    path: 'create',
    component: CreateClientComponent,
  },
  {
    path: 'edit/:id',
    component: CreateClientComponent,
  },

  {
    path: 'envoiMailToClient',
    component: EnvoiEmailToClientComponent,
  },

  {
    path: 'envoiSmsToClient',
    component: EnvoiSMSToClientComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
