import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneApprovisionnement } from '../models/ligne-approvisionnement';

@Injectable({
  providedIn: 'root'
})
export class LigneApprovisionnementService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllLigneApprovisionnements(): Observable<LigneApprovisionnement[]> {
    return this.http.get<LigneApprovisionnement[]>(`${this.apiServerUrl}/ligneApprovisionnements/all`);
  }

  public getLigneApprovisionnementById(comId: number): Observable<LigneApprovisionnement> {
    return this.http.get<LigneApprovisionnement>(`${this.apiServerUrl}/ligneApprovisionnements/findById/${comId}`);
  }

  public addLigneApprovisionnement(ligneApprovisionnement: LigneApprovisionnement): Observable<LigneApprovisionnement> {
    return this.http.post<LigneApprovisionnement>(`${this.apiServerUrl}/ligneApprovisionnements/create`, ligneApprovisionnement);
  }

  public updateLigneApprovisionnement(comId: number, ligneApprovisionnementUpdate: LigneApprovisionnement): Observable<LigneApprovisionnement> {
    return this.http.put<LigneApprovisionnement>(`${this.apiServerUrl}/ligneApprovisionnements/update/${comId}`, ligneApprovisionnementUpdate);
  }

  public deleteLigneApprovisionnement(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneApprovisionnements/delete/${comId}`);
  }
  

}
