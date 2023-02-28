import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCreanceComponent } from './create-creance/create-creance.component';
import { CreateLigneCreanceComponent } from './create-ligne-creance/create-ligne-creance.component';
import { ListCreanceComponent } from './list-creance/list-creance.component';
import { ListLigneCreanceComponent } from './list-ligne-creance/list-ligne-creance.component';
import { ViewCreanceComponent } from './view-creance/view-creance.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListCreanceComponent,
  },
  {
    path: 'create',
    component: CreateCreanceComponent,
  },
  {
    path: 'edit',
    component: CreateCreanceComponent,
  },
  {
    path: 'detail',
    component: ViewCreanceComponent,
  },

  {
    path: 'createLigneCreance',
    component: CreateLigneCreanceComponent,
  },

  {
    path: 'editLigneCreance',
    component: CreateLigneCreanceComponent,
  },

  {
    path: 'details',
    component: ListLigneCreanceComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreanceRoutingModule { }
