import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { CreateFournisseurComponent } from './create-fournisseur/create-fournisseur.component';
import { DetailFournisseurComponent } from './detail-fournisseur/detail-fournisseur.component';
import { EnvoiSMSToFournisseurComponent } from './envoi-smsto-fournisseur/envoi-smsto-fournisseur.component';
import { EnvoiEmailToFournisseurComponent } from './envoi-email-to-fournisseur/envoi-email-to-fournisseur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ListFournisseurComponent,
    CreateFournisseurComponent,
    DetailFournisseurComponent,
    EnvoiSMSToFournisseurComponent,
    EnvoiEmailToFournisseurComponent
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class FournisseurModule { }
