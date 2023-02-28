import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneDevis } from '../models/ligne-devis';

@Injectable({
  providedIn: 'root'
})
export class LigneDevisService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllLigneDeviss(): Observable<LigneDevis[]> {
    return this.http.get<LigneDevis[]>(`${this.apiServerUrl}/ligneDevis/all`);
  }

  public getLigneDevisById(comId: number): Observable<LigneDevis> {
    return this.http.get<LigneDevis>(`${this.apiServerUrl}/ligneDevis/findById/${comId}`);
  }

  public addLigneDevis(ligneDevis: LigneDevis): Observable<LigneDevis> {
    return this.http.post<LigneDevis>(`${this.apiServerUrl}/ligneDevis/create`, ligneDevis);
  }

  public updateLigneDevis(comId: number, ligneDevisUpdate: LigneDevis): Observable<LigneDevis> {
    return this.http.put<LigneDevis>(`${this.apiServerUrl}/ligneDevis/update/${comId}`, ligneDevisUpdate);
  }

  public deleteLigneDevis(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneDevis/delete/${comId}`);
  }
  

}
