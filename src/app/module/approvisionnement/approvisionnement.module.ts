import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListApprovisionnementComponent } from './list-approvisionnement/list-approvisionnement.component';
import { CreateApprovisionnementComponent } from './create-approvisionnement/create-approvisionnement.component';
import { CreateLigneApprovisionnementComponent } from './create-ligne-approvisionnement/create-ligne-approvisionnement.component';
import { ListLigneApprovisionnementComponent } from './list-ligne-approvisionnement/list-ligne-approvisionnement.component';
import { DetailApprovisionnementComponent } from './detail-approvisionnement/detail-approvisionnement.component';
import { UpdateStatusApprovisionnementComponent } from './update-status-approvisionnement/update-status-approvisionnement.component';
import { UpdateMontantApprovisionnementComponent } from './update-montant-approvisionnement/update-montant-approvisionnement.component';
import { ViewApprovisionnementComponent } from './view-approvisionnement/view-approvisionnement.component';
import { ApprovisionnementRoutingModule } from './approvisionnement-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ListApprovisionnementComponent,
    CreateApprovisionnementComponent,
    CreateLigneApprovisionnementComponent,
    ListLigneApprovisionnementComponent,
    DetailApprovisionnementComponent,
    UpdateStatusApprovisionnementComponent,
    UpdateMontantApprovisionnementComponent,
    ViewApprovisionnementComponent
  ],
  imports: [
    CommonModule,
    ApprovisionnementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ]
})
export class ApprovisionnementModule { }
