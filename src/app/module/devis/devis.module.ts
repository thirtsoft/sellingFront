import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisRoutingModule } from './devis-routing.module';
import { CreateDevisComponent } from './create-devis/create-devis.component';
import { CreateLigneDevisComponent } from './create-ligne-devis/create-ligne-devis.component';
import { ListDevisComponent } from './list-devis/list-devis.component';
import { ListLigneDevisComponent } from './list-ligne-devis/list-ligne-devis.component';
import { ViewDevisComponent } from './view-devis/view-devis.component';


@NgModule({
  declarations: [
    CreateDevisComponent,
    CreateLigneDevisComponent,
    ListDevisComponent,
    ListLigneDevisComponent,
    ViewDevisComponent
  ],
  imports: [
    CommonModule,
    DevisRoutingModule
  ]
})
export class DevisModule { }
