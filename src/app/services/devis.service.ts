import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devis } from '../models/devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllDeviss(): Observable<Devis[]> {
    return this.http.get<Devis[]>(`${this.apiServerUrl}/devis/all`);
  }

  public getDevisById(comId: number): Observable<Devis> {
    return this.http.get<Devis>(`${this.apiServerUrl}/devis/findById/${comId}`);
  }

  public addDevis(devis: Devis): Observable<Devis> {
    return this.http.post<Devis>(`${this.apiServerUrl}/devis/create`, devis);
  }

  public updateDevis(comId: number, devisUpdate: Devis): Observable<Devis> {
    return this.http.put<Devis>(`${this.apiServerUrl}/devis/update/${comId}`, devisUpdate);
  }

  public deleteDevis(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/devis/delete/${comId}`);
  }
  

}
