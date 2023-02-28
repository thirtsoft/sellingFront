import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneVente } from '../models/ligne-vente';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTop200OrderItemByIdDesc(): Observable<LigneVente[]> {
    return this.http.get<LigneVente[]>(`${this.apiServerUrl}/ligneVentes/searchTop200OrderedItemsByIdDesc`);
  }

  public getNumberOfProduitByScategorie(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/searchCountProduitsByStock`);
  }

  public getNumberOfProductByStock(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/countProduitsByStock`);
  }

  public getNumberOfProductWhenStockEqualStockInit(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/countProduitsWhenQStockEqualStockInit`);
  }

  public getNumberOfProductWhenStockInfStockInit(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/countProduitsWhenQStockInfStockInit`);
  }

  public getNumberOfCommandes(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/commandes/countNumbersOfCommandes`);
  }

  public getNumberOfVentesByDay(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/ventes/countNumberOfVente`);
  }

  public getNumbersOfClients(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/clients/countNumberOfClients`);
  }

  public getNumbersOfFournisseurs(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/countFournisseurs`);
  }

  public getSumTotalOfCommandes(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/NumbersOfCommandes`);
  }

  public getSumTotalOfVentesInDay(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/ventes/searchSumsOfVenteInDay`);
  }

  public getSumsOfVentesByMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/ventes/SumsOfVentesInMonth`);
  }
 
  public getSumsOfVentesByYear(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/SumsOfVentesByYear`);
  }

  public getSumsOfCommandesByMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/commandes/SumsOfCommandesInMonth`);
  }

  public getSumsOfCommandesByYear(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/SumsOfCommandesByYear`);
  }

  public getSumListOfCreancesByMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/sumTotalOfCreanceByMonth`);
  }

  public getNumberTotalOfCommandeByMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/searchNumberOfCommandeByMonth`);
  }

  public getNumberTotalOfVenteByMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/searchNumberOfVenteByMonth`);
  }

  public getSumTotalOfCommandeByMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/searchSumCommandeByMonth`);
  }

  public getSumTotalOfVenteByMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/searchSumVenteByMonth`);
  }

  public getSumTotalOfVenteByYear(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/searchSumVenteByYears`);
  }

  public getCapitalDeDepart(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/products/capitalDeDepart`);
  }

} 
