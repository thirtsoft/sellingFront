import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Avoir } from '../models/avoir';

@Injectable({
  providedIn: 'root'
})
export class AvoirService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllAvoirs(): Observable<Avoir[]> {
    return this.http.get<Avoir[]>(`${this.apiServerUrl}/avoirs/all`);
  }

  public getAvoirById(avoirId: number): Observable<Avoir> {
    return this.http.get<Avoir>(`${this.apiServerUrl}/avoirs/findById/${avoirId}`);
  }

  public addAvoir(avoir: Avoir): Observable<Avoir> {
    return this.http.post<Avoir>(`${this.apiServerUrl}/avoirs/create`, avoir);
  }

  public updateAvoir(avoirId: number, avoirUpdate: Avoir): Observable<Avoir> {
    return this.http.put<Avoir>(`${this.apiServerUrl}/avoirs/update/${avoirId}`, avoirUpdate);
  }

  public deleteAvoir(avoirId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/avoirs/delete/${avoirId}`);
  }
}
