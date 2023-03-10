import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSubCategoryComponent } from './create-sub-category/create-sub-category.component';
import { ListSubCategoryComponent } from './list-sub-category/list-sub-category.component';

const routes: Routes = [

  { 
    path: '', 
    redirectTo: 'list', 
    pathMatch: 'full' 
  },
  
  {
    path: 'list',
    component: ListSubCategoryComponent,
  },
  {
    path: 'create',
    component: CreateSubCategoryComponent,
  },
  {
    path: 'edit/:id',
    component: CreateSubCategoryComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryRoutingModule { }
