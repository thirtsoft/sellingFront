import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { ListSubCategoryComponent } from './list-sub-category/list-sub-category.component';
import { CreateSubCategoryComponent } from './create-sub-category/create-sub-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';


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
