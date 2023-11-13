import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { EnvoiEmailToClientComponent } from './pages/envoi-email-to-client/envoi-email-to-client.component';
import { EnvoiSMSToClientComponent } from './pages/envoi-smsto-client/envoi-smsto-client.component';


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
