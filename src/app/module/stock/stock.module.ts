import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { StockRoutingModule } from './stock-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListStockComponent } from './list-stock/list-stock.component';
import { CreateStockComponent } from './create-stock/create-stock.component';


@NgModule({
  declarations: [
    ListStockComponent,
    CreateStockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
    NgbProgressbarModule,
    
    
    
  ]
})
export class StockModule { }
