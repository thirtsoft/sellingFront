import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDevisComponent } from './create-devis/create-devis.component';
import { CreateLigneDevisComponent } from './create-ligne-devis/create-ligne-devis.component';
import { ListDevisComponent } from './list-devis/list-devis.component';
import { ListLigneDevisComponent } from './list-ligne-devis/list-ligne-devis.component';
import { ViewDevisComponent } from './view-devis/view-devis.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListDevisComponent,
  },
  {
    path: 'create',
    component: CreateDevisComponent,
  },
  {
    path: 'edit',
    component: CreateDevisComponent,
  },
  {
    path: 'detail',
    component: ViewDevisComponent,
  },

  {
    path: 'createLigneDevis',
    component: CreateLigneDevisComponent,
  },

  {
    path: 'editLigneDevis',
    component: CreateLigneDevisComponent,
  },

  {
    path: 'listLigneDevis',
    component: ListLigneDevisComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevisRoutingModule { }
