import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListCategoryComponent,
  },
  {
    path: 'create',
    component: CreateCategoryComponent,
  },
  /* {
    path: 'create/:id',
    component: CreateCategoryComponent,
  }, */
  {
    path: 'edit/:id',
    component: CreateCategoryComponent
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
