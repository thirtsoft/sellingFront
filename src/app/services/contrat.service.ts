import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contrat } from '../models/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllContrats(): Observable<Contrat[]> {
    return this.http.get<Contrat[]>(`${this.apiServerUrl}/contrats/all`);
  }

  public getContratById(comId: number): Observable<Contrat> {
    return this.http.get<Contrat>(`${this.apiServerUrl}/contrats/findById/${comId}`);
  }

  public addContrat(contrat: Contrat): Observable<Contrat> {
    return this.http.post<Contrat>(`${this.apiServerUrl}/contrats/create`, contrat);
  }

  public updateContrat(comId: number, contratUpdate: Contrat): Observable<Contrat> {
    return this.http.put<Contrat>(`${this.apiServerUrl}/contrats/update/${comId}`, contratUpdate);
  }

  public deleteContrat(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/contrats/delete/${comId}`);
  }

}
