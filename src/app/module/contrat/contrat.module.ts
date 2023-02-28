import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { CreateContratComponent } from './create-contrat/create-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { UploadFileContratComponent } from './upload-file-contrat/upload-file-contrat.component';
import { ViewFileContratComponent } from './view-file-contrat/view-file-contrat.component';


@NgModule({
  declarations: [
    CreateContratComponent,
    ListContratComponent,
    UploadFileContratComponent,
    ViewFileContratComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule
  ]
})
export class ContratModule { }
