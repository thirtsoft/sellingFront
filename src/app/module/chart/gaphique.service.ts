import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GaphiqueService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getNumberOfProduitBySubCategorie(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/products/searchCountProductsByStock`);
  }

  public getNumberTotalOfVentePeerMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/ventes/searchNumberOfVentePeerMonth`);
  }

  public getSumTotalOfVentePeerMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/ventes/searchSumVentePeerMonth`);
  }

  public getSumTotalOfVentePeerYear(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/ventes/searchSumVentePeerYear`);
  }

  public getNumberTotalOfCommandePeerMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/commandes/numberOfCommandesPeerMonth`);
  }

  public getSumsOfCommandesPeerMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/commandes/sumOfCommandesPeerMonth`);
  }

  public getSumListOfCreancesPeerMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/creances/sumTotalOfCreancePeerMonth`);
  }

  public getSumTotalOfCreancePeerYear(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/creances/SumTotalOfCreancePeerYear`);
  }

  public getSumMontantTotalOfDepensePeerMonth(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/charges/sumMontantTotalChargePeerMonth"`);
  }

  public getSumTotalOfChargeByYear(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/charges/sumTotalChargeByYear`);
  }

 

}
