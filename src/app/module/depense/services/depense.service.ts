import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depense } from 'src/app/models/depense';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllDepenses(): Observable<Depense[]> {
    return this.http.get<Depense[]>(`${this.apiServerUrl}/depenses/all`);
  }

  public getDepenseById(comId: number): Observable<Depense> {
    return this.http.get<Depense>(`${this.apiServerUrl}/depenses/findById/${comId}`);
  }

  public addDepense(depense: Depense): Observable<Depense> {
    return this.http.post<Depense>(`${this.apiServerUrl}/depenses/create`, depense);
  }

  public updateDepense(comId: number, depenseUpdate: Depense): Observable<Depense> {
    return this.http.put<Depense>(`${this.apiServerUrl}/depenses/update/${comId}`, depenseUpdate);
  }

  public deleteDepense(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/depenses/delete/${comId}`);
  }

  
}
