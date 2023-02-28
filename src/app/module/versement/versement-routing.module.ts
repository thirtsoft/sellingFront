import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVersementComponent } from './create-versement/create-versement.component';
import { ListVersementComponent } from './list-versement/list-versement.component';
import { UploadFileVersementComponent } from './upload-file-versement/upload-file-versement.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ListVersementComponent,
  },
  {
    path: 'create',
    component: CreateVersementComponent,
  },
  {
    path: 'edit',
    component: CreateVersementComponent,
  },
  {
    path: 'upload',
    component: UploadFileVersementComponent,
  },
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersementRoutingModule { }
