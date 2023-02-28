import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContratComponent } from './create-contrat/create-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { UploadFileContratComponent } from './upload-file-contrat/upload-file-contrat.component';
import { ViewFileContratComponent } from './view-file-contrat/view-file-contrat.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListContratComponent,
  },
  {
    path: 'create',
    component: CreateContratComponent,
  },
  {
    path: 'edit',
    component: CreateContratComponent,
  },
  {
    path: 'detail',
    component: ViewFileContratComponent,
  },

  {
    path: 'upload',
    component: UploadFileContratComponent,
  },  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
