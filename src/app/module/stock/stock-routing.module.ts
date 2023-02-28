import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { ListStockComponent } from './list-stock/list-stock.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListStockComponent,
  },
  {
    path: 'create',
    component: CreateStockComponent,
  },
  {
    path: 'edit',
    component: CreateStockComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
