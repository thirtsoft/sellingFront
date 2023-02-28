import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { CreateLigneCommandeComponent } from './create-ligne-commande/create-ligne-commande.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { ListLigneCommandeComponent } from './list-ligne-commande/list-ligne-commande.component';
import { ViewCommandeComponent } from './view-commande/view-commande.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListCommandeComponent,
  },
  {
    path: 'create',
    component: CreateCommandeComponent,
  },
  {
    path: 'edit',
    component: CreateCommandeComponent,
  },
  {
    path: 'detail',
    component: ViewCommandeComponent,
  },

  {
    path: 'createLigneCommande',
    component: CreateLigneCommandeComponent,
  },

  {
    path: 'editLigneCommande',
    component: CreateLigneCommandeComponent,
  },

  {
    path: 'listLigneCommande',
    component: ListLigneCommandeComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
