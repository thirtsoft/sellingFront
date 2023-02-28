import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { CreateLigneCommandeComponent } from './create-ligne-commande/create-ligne-commande.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { ListLigneCommandeComponent } from './list-ligne-commande/list-ligne-commande.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { ViewCommandeComponent } from './view-commande/view-commande.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceCommandeComponent } from './invoice-commande/invoice-commande.component';


@NgModule({
  declarations: [
    CreateCommandeComponent,
    CreateLigneCommandeComponent,
    ListCommandeComponent,
    ListLigneCommandeComponent,
    DetailCommandeComponent,
    ViewCommandeComponent,
    InvoiceCommandeComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommandeModule { }
