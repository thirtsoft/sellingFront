import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Versement } from '../models/versement';

@Injectable({
  providedIn: 'root'
})
export class VersementService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllVersements(): Observable<Versement[]> {
    return this.http.get<Versement[]>(`${this.apiServerUrl}/versements/all`);
  }

  public getVersementById(comId: number): Observable<Versement> {
    return this.http.get<Versement>(`${this.apiServerUrl}/versements/findById/${comId}`);
  }

  public addVersement(versement: Versement): Observable<Versement> {
    return this.http.post<Versement>(`${this.apiServerUrl}/versements/create`, versement);
  }

  public updateVersement(comId: number, versementUpdate: Versement): Observable<Versement> {
    return this.http.put<Versement>(`${this.apiServerUrl}/versements/update/${comId}`, versementUpdate);
  }

  public deleteVersement(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/versements/delete/${comId}`);
  }

}
