import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.apiServerUrl}/commandes/all`);
  }

  public getCommandeById(comId: number): Observable<Commande> {
    return this.http.get<Commande>(`${this.apiServerUrl}/commandes/findById/${comId}`);
  }

  public addCommande(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(`${this.apiServerUrl}/commandes/create`, commande);
  }

  public updateCommande(comId: number, commandeUpdate: Commande): Observable<Commande> {
    return this.http.put<Commande>(`${this.apiServerUrl}/commandes/update/${comId}`, commandeUpdate);
  }

  public deleteCommande(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/commandes/delete/${comId}`);
  }
  
}
