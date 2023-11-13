import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListFournisseurComponent } from './pages/list-fournisseur/list-fournisseur.component';
import { CreateFournisseurComponent } from './pages/create-fournisseur/create-fournisseur.component';
import { DetailFournisseurComponent } from './pages/detail-fournisseur/detail-fournisseur.component';
import { EnvoiSMSToFournisseurComponent } from './pages/envoi-smsto-fournisseur/envoi-smsto-fournisseur.component';
import { EnvoiEmailToFournisseurComponent } from './pages/envoi-email-to-fournisseur/envoi-email-to-fournisseur.component';


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
