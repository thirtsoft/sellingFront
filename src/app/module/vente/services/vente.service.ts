import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vente } from '../../../models/vente';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllVentes(): Observable<Vente[]> {
    return this.http.get<Vente[]>(`${this.apiServerUrl}/ventes/all`);
  }

  public getVenteById(prodId: number): Observable<Vente> {
    return this.http.get<Vente>(`${this.apiServerUrl}/ventes/findById/${prodId}`);
  }

  public addVente(Vente: Vente): Observable<Vente> {
    return this.http.post<Vente>(`${this.apiServerUrl}/ventes/savevente`, Vente);
  }

  public updateVente(prodId: number, VenteUpdate: Vente): Observable<Vente> {
    return this.http.put<Vente>(`${this.apiServerUrl}/ventes/update/${prodId}`, VenteUpdate);
  }

  public getNumeroVente(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/ventes/generate-numero-vente`);
  }

  public deleteVente(prodId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ventes/delete/${prodId}`);
  }

}
