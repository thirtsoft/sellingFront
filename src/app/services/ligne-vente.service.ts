import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneVente } from '../models/ligne-vente';

@Injectable({
  providedIn: 'root'
})
export class LigneVenteService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllLigneVentes(): Observable<LigneVente[]> {
    return this.http.get<LigneVente[]>(`${this.apiServerUrl}/ligneVentes/all`);
  }

  public getLigneVentesByVenteId(venteId: number): Observable<LigneVente[]> {
    return this.http.get<LigneVente[]>(`${this.apiServerUrl}/ligneVentes/searchListLigneVentesByVenteId/${venteId}`);
  }

  public getLigneVenteById(comId: number): Observable<LigneVente> {
    return this.http.get<LigneVente>(`${this.apiServerUrl}/ligneVentes/findById/${comId}`);
  }

  public addLigneVente(ligneVente: LigneVente): Observable<LigneVente> {
    return this.http.post<LigneVente>(`${this.apiServerUrl}/ligneVentes/create`, ligneVente);
  }

  public updateLigneVente(comId: number, ligneVenteUpdate: LigneVente): Observable<LigneVente> {
    return this.http.put<LigneVente>(`${this.apiServerUrl}/ligneVentes/update/${comId}`, ligneVenteUpdate);
  }

  public deleteLigneVente(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneVentes/delete/${comId}`);
  }

}
