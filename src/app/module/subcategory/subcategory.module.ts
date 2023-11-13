import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListSubCategoryComponent } from './pages/list-sub-category/list-sub-category.component';
import { CreateSubCategoryComponent } from './pages/create-sub-category/create-sub-category.component';


@NgModule({
  declarations: [
    ListSubCategoryComponent,
    CreateSubCategoryComponent
  ],
  imports: [
    CommonModule,
    SubcategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class SubcategoryModule { }
