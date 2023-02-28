import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateApprovisionnementComponent } from './create-approvisionnement/create-approvisionnement.component';
import { CreateLigneApprovisionnementComponent } from './create-ligne-approvisionnement/create-ligne-approvisionnement.component';
import { ListApprovisionnementComponent } from './list-approvisionnement/list-approvisionnement.component';
import { ListLigneApprovisionnementComponent } from './list-ligne-approvisionnement/list-ligne-approvisionnement.component';
import { UpdateMontantApprovisionnementComponent } from './update-montant-approvisionnement/update-montant-approvisionnement.component';
import { UpdateStatusApprovisionnementComponent } from './update-status-approvisionnement/update-status-approvisionnement.component';
import { ViewApprovisionnementComponent } from './view-approvisionnement/view-approvisionnement.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListApprovisionnementComponent,
  },
  {
    path: 'create',
    component: CreateApprovisionnementComponent,
  },
  {
    path: 'edit',
    component: CreateApprovisionnementComponent,
  },
  {
    path: 'detail',
    component: ViewApprovisionnementComponent,
  },
  {
    path: 'updateMontant',
    component: UpdateMontantApprovisionnementComponent,
  },

  {
    path: 'updateStatus',
    component: UpdateStatusApprovisionnementComponent,
  },

  {
    path: 'createLigneApprovisionnement',
    component: CreateLigneApprovisionnementComponent,
  },

  {
    path: 'editLigneApprovisionnement',
    component: CreateLigneApprovisionnementComponent,
  },

  {
    path: 'details',
    component: ListLigneApprovisionnementComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovisionnementRoutingModule { }
