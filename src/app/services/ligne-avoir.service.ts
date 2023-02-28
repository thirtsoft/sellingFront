import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneAvoir } from '../models/ligne-avoir';

@Injectable({
  providedIn: 'root'
})
export class LigneAvoirService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllLigneAvoirs(): Observable<LigneAvoir[]> {
    return this.http.get<LigneAvoir[]>(`${this.apiServerUrl}/ligneAvoirs/all`);
  }

  public getLigneAvoirById(comId: number): Observable<LigneAvoir> {
    return this.http.get<LigneAvoir>(`${this.apiServerUrl}/ligneAvoirs/findById/${comId}`);
  }

  public addLigneAvoir(ligneAvoir: LigneAvoir): Observable<LigneAvoir> {
    return this.http.post<LigneAvoir>(`${this.apiServerUrl}/ligneAvoirs/create`, ligneAvoir);
  }

  public updateLigneAvoir(comId: number, ligneAvoirUpdate: LigneAvoir): Observable<LigneAvoir> {
    return this.http.put<LigneAvoir>(`${this.apiServerUrl}/ligneAvoirs/update/${comId}`, ligneAvoirUpdate);
  }

  public deleteLigneAvoir(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneAvoirs/delete/${comId}`);
  }
  
}
