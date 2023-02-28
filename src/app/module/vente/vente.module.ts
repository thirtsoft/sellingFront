import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { VenteRoutingModule } from './vente-routing.module';
import { CreateLigneVenteComponent } from './create-ligne-vente/create-ligne-vente.component';
import { CreateVenteComponent } from './create-vente/create-vente.component';
import { CreateVenteWithBarCodeComponent } from './create-vente-with-bar-code/create-vente-with-bar-code.component';
import { ListVenteComponent } from './list-vente/list-vente.component';
import { ListLigneVenteComponent } from './list-ligne-vente/list-ligne-vente.component';
import { DetailVenteComponent } from './detail-vente/detail-vente.component';
import { ViewVenteComponent } from './view-vente/view-vente.component';
import { VenteMensuelComponent } from './vente-mensuel/vente-mensuel.component';
import { VenteMensuelleComponent } from './vente-mensuelle/vente-mensuelle.component';
import { VenteJournaliereComponent } from './vente-journaliere/vente-journaliere.component';
import { ListVenteByUtilisateurComponent } from './list-vente-by-utilisateur/list-vente-by-utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceVenteComponent } from './invoice-vente/invoice-vente.component';


@NgModule({
  declarations: [
    CreateLigneVenteComponent,
    CreateVenteComponent,
    CreateVenteWithBarCodeComponent,
    ListVenteComponent,
    ListLigneVenteComponent,
    DetailVenteComponent,
    ViewVenteComponent,
    VenteMensuelComponent,
    VenteMensuelleComponent,
    VenteJournaliereComponent,
    ListVenteByUtilisateurComponent,
    InvoiceVenteComponent
  ],
  imports: [
    CommonModule,
    VenteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class VenteModule { }
