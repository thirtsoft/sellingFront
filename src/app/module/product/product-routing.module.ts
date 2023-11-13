import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';

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
