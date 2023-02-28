import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { CreateEmployeComponent } from './create-employe/create-employe.component';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { DetailEmployeComponent } from './detail-employe/detail-employe.component';
import { EnvoiEmailToEmployeComponent } from './envoi-email-to-employe/envoi-email-to-employe.component';
import { EnvoiSMSToEmployeComponent } from './envoi-smsto-employe/envoi-smsto-employe.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    CreateEmployeComponent,
    ListEmployeComponent,
    DetailEmployeComponent,
    EnvoiEmailToEmployeComponent,
    EnvoiSMSToEmployeComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    DataTablesModule
  ]
})
export class EmployeModule { }
