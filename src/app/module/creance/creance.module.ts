import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreanceRoutingModule } from './creance-routing.module';
import { CreateCreanceComponent } from './create-creance/create-creance.component';
import { CreateLigneCreanceComponent } from './create-ligne-creance/create-ligne-creance.component';
import { ListLigneCreanceComponent } from './list-ligne-creance/list-ligne-creance.component';
import { ListCreanceComponent } from './list-creance/list-creance.component';
import { ViewCreanceComponent } from './view-creance/view-creance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    CreateCreanceComponent,
    CreateLigneCreanceComponent,
    ListLigneCreanceComponent,
    ListCreanceComponent,
    ViewCreanceComponent
  ],
  imports: [
    CommonModule,
    CreanceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ]
})
export class CreanceModule { }
