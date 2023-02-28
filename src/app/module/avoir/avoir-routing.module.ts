import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAvoirComponent } from './create-avoir/create-avoir.component';
import { CreateLigneAvoirComponent } from './create-ligne-avoir/create-ligne-avoir.component';
import { ListAvoirComponent } from './list-avoir/list-avoir.component';
import { ListLigneAvoirComponent } from './list-ligne-avoir/list-ligne-avoir.component';
import { ViewAvoirComponent } from './view-avoir/view-avoir.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListAvoirComponent,
  },
  {
    path: 'create',
    component: CreateAvoirComponent,
  },
  {
    path: 'edit',
    component: CreateAvoirComponent,
  },
  {
    path: 'detail',
    component: ViewAvoirComponent,
  },

  {
    path: 'createLigneCommande',
    component: CreateLigneAvoirComponent,
  },

  {
    path: 'editLigneAvoir',
    component: CreateLigneAvoirComponent,
  },

  {
    path: 'listLigneAvoir',
    component: ListLigneAvoirComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvoirRoutingModule { }
