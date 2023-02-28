import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Depense } from '../models/depense';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllDepenses(): Observable<Depense[]> {
    return this.http.get<Depense[]>(`${this.apiServerUrl}/charges/all`);
  }

  public getDepenseById(comId: number): Observable<Depense> {
    return this.http.get<Depense>(`${this.apiServerUrl}/charges/findById/${comId}`);
  }

  public addDepense(depense: Depense): Observable<Depense> {
    return this.http.post<Depense>(`${this.apiServerUrl}/charges/create`, depense);
  }

  public updateDepense(comId: number, depenseUpdate: Depense): Observable<Depense> {
    return this.http.put<Depense>(`${this.apiServerUrl}/charges/update/${comId}`, depenseUpdate);
  }

  public deleteDepense(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/charges/delete/${comId}`);
  }

  
}
