import { Component, OnInit } from '@angular/core';
import { Creance } from 'src/app/models/creance';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/module/product/services/product.service';
import { CreanceService } from 'src/app/services/creance.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productList: Product[] = [];
  creanceList: Creance[] = [];

  alerteStockArticleEpuise = 0;
  alerteEcheanceCreanceClient = 0;

  creanceLimit = 0;
//  currentTime: number = 0;

  dateEndCreance:any;

  endDate!: Date;
  dateResult!: Date;
  dateResult2:any;
  currentDay:any;
  numberDay:any;
  dateJour:any;
  NbreJourLimit:any;
  convertNumber = 1000 * 60 * 60 * 24;

  
  constructor(private productService: ProductService,
    private creanceService: CreanceService) { }

  ngOnInit() {
    this.getAllProductListes();
    this.getAllCreanceListes();
  }

  getAllProductListes(){
    this.productService.getAllProducts().subscribe(res => {
      this.productList = res;
      for(let i = 0; i< this.productList.length; i++) {
        if ((this.productList[i].qtestock!) < (this.productList[i].stockInitial!)) {
          this.alerteStockArticleEpuise++;
        }
      }
    });
  }

  getAllCreanceListes() {
    this.creanceService.getAllCreances().subscribe(response => {
      this.creanceList = response;
      for (let i = 0; i < this.creanceList.length; i++) {
        this.endDate = new Date(this.creanceList[i].dateCreance);
        this.numberDay = this.creanceList[i].nbreJours
        console.log("End Date : " +this.endDate);
        this.dateResult = new Date(this.endDate);
        this.dateResult2 = new Date(this.dateResult.setDate(this.dateResult.getDate() + this.numberDay));
        console.log("Data Result : " +this.dateResult2);
        this.dateJour = new Date();

        this.NbreJourLimit = ((this.dateResult2.getTime())-(this.dateJour.getTime()));
        this.creanceLimit = Math.floor((this.NbreJourLimit)/(this.convertNumber));
        console.log(this.creanceLimit);
        
        if (this.creanceLimit <= 7) {
          this.alerteEcheanceCreanceClient++;
        }
      }
    })
  }

}
