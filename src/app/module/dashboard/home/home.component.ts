import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LigneVente } from 'src/app/models/ligne-vente';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ligneVentesList: LigneVente[] = [];

  sumCommandes = 0;
  sumVentesInDay = 0;
  sumVenteByMonth = 0;
  sumCommandeByMonth = 0;
  capitalDeDepart = 0;

  numberCommandes = 0;
  numberClients = 0;
  numberOfFournisseurs = 0;
  numberVentesByDay = 0;
  numberOfVenteByMonth = 0;
  numberProductByScategorie = 0;
  numberOfProductByStock = 0;
  numberOfProductWhenStockEqualStockInit = 0;
  numberOfProductWhenStockInfStockInit = 0;

  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.getTop200OrderItem();

    this.getNumberOfCommandes();
    this.getNumberOfClients();
    this.getNumberOfVentesByDay();

    this.getSumOfCommandesByMonth();
    this.getSumOfCommandes();
    this.getSumOfVentesInDay();
    this.getSumOfVentesByMonth();
    this.getCapitalDeDepart();

    this.getNumberOfVentesByDay();
    this.getNumberOfVentesByMonth();
    
    this.getNumberOfProductsByStock();
    this.getNumberOfProductsWhenQStockEqualStockInital();
    this.getNumberOfProductsWhenQStockInfStockInital();

  }

  getNumberOfClients(): void {
    this.dashboardService.getNumbersOfClients().subscribe(data => {
      this.numberClients = data;
    });
  }

  getNumberOfProductsByScategorie(): void {
    this.dashboardService.getNumberOfProduitByScategorie().subscribe(response => {
      this.numberProductByScategorie = response;
    });
  }

  getNumberOfProductsByStock(): void {
    this.dashboardService.getNumberOfProductByStock().subscribe(response => {
      this.numberOfProductByStock = response;
    });
  }

  getNumberOfProductsWhenQStockEqualStockInital(): void {
    this.dashboardService.getNumberOfProductWhenStockEqualStockInit()
      .subscribe(response => {
      this.numberOfProductWhenStockEqualStockInit = response;
    });
  }

  getNumberOfProductsWhenQStockInfStockInital(): void {
    this.dashboardService.getNumberOfProductWhenStockInfStockInit()
      .subscribe(response => {
      this.numberOfProductWhenStockInfStockInit = response;
    });
  }

  getSumOfCommandes(): void {
    this.dashboardService.getSumTotalOfCommandes().subscribe(data => {
      this.sumCommandes = data;
      console.log(this.sumCommandes);
    });
  }

  getNumberOfCommandes(): void {
    this.dashboardService.getNumberOfCommandes().subscribe(data => {
     this.numberCommandes = data;
    });
 }

 getNumberOfVentesByDay(): void {
   this.dashboardService.getNumberOfVentesByDay().subscribe(data => {
    this.numberVentesByDay = data;
   });
 }

 getNumberOfVentesByMonth(): void {
   this.dashboardService.getNumberTotalOfVenteByMonth().subscribe(response => {
     this.numberOfVenteByMonth = response;
   });
 }

  getSumOfVentesInDay(): void {
    this.dashboardService.getSumTotalOfVentesInDay().subscribe(data => {
      this.sumVentesInDay = data;
    });
  }

  getSumOfVentesByMonth(): void {
    this.dashboardService.getSumsOfVentesByMonth().subscribe(data => {
      this.sumVenteByMonth = data;
    });
  }

  getSumOfCommandesByMonth(): void {
    this.dashboardService.getSumsOfCommandesByMonth().subscribe(data => {
      this.sumCommandeByMonth = data;
    });
  }

  getCapitalDeDepart(): void {
    this.dashboardService.getCapitalDeDepart().subscribe(data => {
      this.capitalDeDepart = data;
      console.log(this.capitalDeDepart);
      
    });
  }

  getTop200OrderItem() {
    this.dashboardService.getTop200OrderItemByIdDesc().subscribe(
      (response: LigneVente[]) => {
        this.ligneVentesList = response;
  //      this.dtTrigger.next(null);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  } 


}
