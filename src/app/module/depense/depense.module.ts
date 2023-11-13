import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { DepenseRoutingModule } from './depense-routing.module';
import { ListTypeDepenseComponent } from './pages/list-type-depense/list-type-depense.component';
import { CreateTypeDepenseComponent } from './pages/create-type-depense/create-type-depense.component';
import { CreateDepenseComponent } from './pages/create-depense/create-depense.component';
import { ListDepenseComponent } from './pages/list-depense/list-depense.component';


@NgModule({
  declarations: [
    ListTypeDepenseComponent,
    CreateTypeDepenseComponent,
    CreateDepenseComponent,
    ListDepenseComponent
  ],
  imports: [
    CommonModule,
    DepenseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class DepenseModule { }
