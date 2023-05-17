import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Commande } from 'src/app/models/commande';
import { GaphiqueService } from '../gaphique.service';

@Component({
  selector: 'app-bar-char-commande',
  templateUrl: './bar-char-commande.component.html',
  styleUrls: ['./bar-char-commande.component.css']
})
export class BarCharCommandeComponent implements OnInit {

  Barchart: any = [];
  NumberCommandeByMonth: number[] = [];
  CommandeOfMonth: Date[] = [];

  list: any={};

  constructor(private statService: GaphiqueService) { }

  ngOnInit() {
    this.statService.getNumberTotalOfCommandePeerMonth().subscribe((result: Commande[]) => {
      this.list = result;
      const n = 1;
      const m = 0;
      console.log(this.list);
      for (let i=0; i<this.list.length; i++) {
        this.NumberCommandeByMonth.push(this.list[i][n]);
        this.CommandeOfMonth.push(this.list[i][m]);
      }
      this
      this.Barchart = new Chart('barChartCommande', {
        type: 'bar',
        data: {
          labels: this.CommandeOfMonth,

          datasets: [
            {
              data: this.NumberCommandeByMonth,
              borderColor: '#3cb371',
              backgroundColor: "#008080",
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: false
              }
            }],
          }
        }
      });
    });

  }


}
