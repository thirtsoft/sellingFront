import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneCommande } from '../models/ligne-commande';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllLigneCommandes(): Observable<LigneCommande[]> {
    return this.http.get<LigneCommande[]>(`${this.apiServerUrl}/ligneCommandes/all`);
  }

  public getLigneCommandeById(comId: number): Observable<LigneCommande> {
    return this.http.get<LigneCommande>(`${this.apiServerUrl}/ligneCommandes/findById/${comId}`);
  }

  public addLigneCommande(ligneCommande: LigneCommande): Observable<LigneCommande> {
    return this.http.post<LigneCommande>(`${this.apiServerUrl}/ligneCommandes/create`, ligneCommande);
  }

  public updateLigneCommande(comId: number, ligneCommandeUpdate: LigneCommande): Observable<LigneCommande> {
    return this.http.put<LigneCommande>(`${this.apiServerUrl}/ligneCommandes/update/${comId}`, ligneCommandeUpdate);
  }

  public deleteLigneCommande(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneCommandes/delete/${comId}`);
  }

}
