import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartComponent } from './chart/chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartStockComponent } from './pie-chart-stock/pie-chart-stock.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: BarChartComponent,
  },
  {
    path: 'chart',
    component: ChartComponent,
  },
  {
    path: 'lineChart',
    component: LineChartComponent,
  },

  {
    path: 'pieChart',
    component: PieChartComponent,
  },

  {
    path: 'pieChartStock',
    component: PieChartStockComponent,
  },
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
