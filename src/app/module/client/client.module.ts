import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { ListClientComponent } from './pages/list-client/list-client.component';
import { EnvoiEmailToClientComponent } from './pages/envoi-email-to-client/envoi-email-to-client.component';
import { EnvoiSMSToClientComponent } from './pages/envoi-smsto-client/envoi-smsto-client.component';


@NgModule({
  declarations: [
    CreateClientComponent,
    ListClientComponent,
    EnvoiEmailToClientComponent,
    EnvoiSMSToClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class ClientModule { }
