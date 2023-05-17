import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { BarCharComVenteComponent } from './bar-char-com-vente/bar-char-com-vente.component';
import { BarCharCommandeComponent } from './bar-char-commande/bar-char-commande.component';
import { BarCharCreanceComponent } from './bar-char-creance/bar-char-creance.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartComponent } from './chart/chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PieChartStockComponent } from './pie-chart-stock/pie-chart-stock.component';


@NgModule({
  declarations: [
    BarCharComVenteComponent,
    BarCharCommandeComponent,
    BarCharCreanceComponent,
    BarChartComponent,
    ChartComponent,
    LineChartComponent,
    PieChartComponent,
    PieChartStockComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule
  ],
  exports: [BarCharCommandeComponent] 
})
export class ChartModule { }

