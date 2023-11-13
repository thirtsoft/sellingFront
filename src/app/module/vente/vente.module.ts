import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { VenteRoutingModule } from './vente-routing.module';
import { CreateLigneVenteComponent } from './pages/create-ligne-vente/create-ligne-vente.component';
import { CreateVenteComponent } from './pages/create-vente/create-vente.component';
import { CreateVenteWithBarCodeComponent } from './pages/create-vente-with-bar-code/create-vente-with-bar-code.component';
import { ListVenteComponent } from './pages/list-vente/list-vente.component';
import { DetailVenteComponent } from './pages/detail-vente/detail-vente.component';
import { ViewVenteComponent } from './pages/view-vente/view-vente.component';
import { VenteMensuelComponent } from './pages/vente-mensuel/vente-mensuel.component';
import { VenteMensuelleComponent } from './pages/vente-mensuelle/vente-mensuelle.component';
import { VenteJournaliereComponent } from './pages/vente-journaliere/vente-journaliere.component';
import { ListVenteByUtilisateurComponent } from './pages/list-vente-by-utilisateur/list-vente-by-utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceVenteComponent } from './pages/invoice-vente/invoice-vente.component';
import { ListLigneVenteComponent } from './pages/list-ligne-vente/list-ligne-vente.component';


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
