import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListProductComponent,
  },
  {
    path: 'create',
    component: CreateProductComponent,
  },
  {
    path: 'edit/:id',
    component: CreateProductComponent,
  },

  {
    path: 'detail/:id',
    component: DetailProductComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
