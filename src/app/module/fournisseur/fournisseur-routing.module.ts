import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFournisseurComponent } from './create-fournisseur/create-fournisseur.component';
import { DetailFournisseurComponent } from './detail-fournisseur/detail-fournisseur.component';
import { EnvoiEmailToFournisseurComponent } from './envoi-email-to-fournisseur/envoi-email-to-fournisseur.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListFournisseurComponent,
  },
  {
    path: 'create',
    component: CreateFournisseurComponent,
  },
  {
    path: 'edit/:id',
    component: CreateFournisseurComponent,
  },

  {
    path: 'detail/:id',
    component: DetailFournisseurComponent,
  },

  {
    path: 'envoieMailToFournisseur',
    component: EnvoiEmailToFournisseurComponent,
  },

  {
    path: 'envoieSmSToFournisseur',
    component: EnvoiEmailToFournisseurComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
