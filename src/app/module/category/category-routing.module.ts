import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';

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
