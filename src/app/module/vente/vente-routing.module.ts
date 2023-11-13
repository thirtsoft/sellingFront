import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLigneVenteComponent } from './pages/create-ligne-vente/create-ligne-vente.component';
import { CreateVenteWithBarCodeComponent } from './pages/create-vente-with-bar-code/create-vente-with-bar-code.component';
import { CreateVenteComponent } from './pages/create-vente/create-vente.component';
import { InvoiceVenteComponent } from './pages/invoice-vente/invoice-vente.component';
import { ListLigneVenteComponent } from './pages/list-ligne-vente/list-ligne-vente.component';
import { ListVenteComponent } from './pages/list-vente/list-vente.component';
import { ViewVenteComponent } from './pages/view-vente/view-vente.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListVenteComponent,
  },
  {
    path: 'create',
    component: CreateVenteComponent,
  },
  {
    path: 'venteWithBarcode',
    component: CreateVenteWithBarCodeComponent,
  },
  {
    path: 'edit',
    component: CreateVenteComponent,
  },
  {
    path: 'createLingeVente',
    component: CreateLigneVenteComponent,
  },

  {
    path: 'details',
    component: ListLigneVenteComponent,
  },
  {
    path: 'view',
    component: ViewVenteComponent,
  },
  /*
  {
    path: 'innvoice',
    component: InvoiceVenteComponent,
  },*/

  { path:'invoice/:id', component: InvoiceVenteComponent },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenteRoutingModule { }
