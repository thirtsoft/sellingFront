import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { EnvoiEmailToClientComponent } from './envoi-email-to-client/envoi-email-to-client.component';
import { EnvoiSMSToClientComponent } from './envoi-smsto-client/envoi-smsto-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


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
