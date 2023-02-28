import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Approvisionnement } from '../models/approvisionnement';

@Injectable({
  providedIn: 'root'
})
export class ApprovisionnementService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllApprovisionnements(): Observable<Approvisionnement[]> {
    return this.http.get<Approvisionnement[]>(`${this.apiServerUrl}/approvisionnements/all`);
  }

  public getApprovisionnementById(approId: number): Observable<Approvisionnement> {
    return this.http.get<Approvisionnement>(`${this.apiServerUrl}/approvisionnements/findById/${approId}`);
  }

  public addApprovisionnement(approvisionnement: Approvisionnement): Observable<Approvisionnement> {
    return this.http.post<Approvisionnement>(`${this.apiServerUrl}/approvisionnements/create`, approvisionnement);
  }

  public updateApprovisionnement(approId: number, approvisionnementUpdate: Approvisionnement): Observable<Approvisionnement> {
    return this.http.put<Approvisionnement>(`${this.apiServerUrl}/approvisionnements/update/${approId}`, approvisionnementUpdate);
  }

  public deleteApprovisionnement(approId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/approvisionnements/delete/${approId}`);
  }

}
