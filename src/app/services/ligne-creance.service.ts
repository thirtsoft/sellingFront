import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LigneCreance } from '../models/ligne-creance';

@Injectable({
  providedIn: 'root'
})
export class LigneCreanceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllLigneCreances(): Observable<LigneCreance[]> {
    return this.http.get<LigneCreance[]>(`${this.apiServerUrl}/ligneCreances/all`);
  }

  public getLigneCreanceById(comId: number): Observable<LigneCreance> {
    return this.http.get<LigneCreance>(`${this.apiServerUrl}/ligneCreances/findById/${comId}`);
  }

  public addLigneCreance(ligneCreance: LigneCreance): Observable<LigneCreance> {
    return this.http.post<LigneCreance>(`${this.apiServerUrl}/ligneCreances/create`, ligneCreance);
  }

  public updateLigneCreance(comId: number, ligneCreanceUpdate: LigneCreance): Observable<LigneCreance> {
    return this.http.put<LigneCreance>(`${this.apiServerUrl}/ligneCreances/update/${comId}`, ligneCreanceUpdate);
  }

  public deleteLigneCreance(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ligneCreances/delete/${comId}`);
  }
  

}
