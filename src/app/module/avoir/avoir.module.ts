import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvoirRoutingModule } from './avoir-routing.module';
import { ListAvoirComponent } from './list-avoir/list-avoir.component';
import { CreateAvoirComponent } from './create-avoir/create-avoir.component';
import { CreateLigneAvoirComponent } from './create-ligne-avoir/create-ligne-avoir.component';
import { ListLigneAvoirComponent } from './list-ligne-avoir/list-ligne-avoir.component';
import { ViewAvoirComponent } from './view-avoir/view-avoir.component';


@NgModule({
  declarations: [
    ListAvoirComponent,
    CreateAvoirComponent,
    CreateLigneAvoirComponent,
    ListLigneAvoirComponent,
    ViewAvoirComponent
  ],
  imports: [
    CommonModule,
    AvoirRoutingModule
  ]
})
export class AvoirModule { }
