import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from 'src/app/models/fournisseur';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.apiServerUrl}/fournisseurs/all`);
  }

  public getFournisseurById(fourId: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.apiServerUrl}/fournisseurs/findById/${fourId}`);
  }

  public addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(`${this.apiServerUrl}/fournisseurs/create`, fournisseur);
  }

  public updateFournisseur(fourId: number, fournisseurUpdate: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(`${this.apiServerUrl}/fournisseurs/update/${fourId}`, fournisseurUpdate);
  }

  public deleteFournisseur(fourId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/fournisseurs/delete/${fourId}`);
  }

}
