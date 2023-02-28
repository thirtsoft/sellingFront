import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Creance } from '../models/creance';

@Injectable({
  providedIn: 'root'
})
export class CreanceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllCreances(): Observable<Creance[]> {
    return this.http.get<Creance[]>(`${this.apiServerUrl}/creances/all`);
  }

  public getCreanceById(comId: number): Observable<Creance> {
    return this.http.get<Creance>(`${this.apiServerUrl}/creances/findById/${comId}`);
  }

  public addCreance(creance: Creance): Observable<Creance> {
    return this.http.post<Creance>(`${this.apiServerUrl}/creances/create`, creance);
  }

  public updateCreance(comId: number, creanceUpdate: Creance): Observable<Creance> {
    return this.http.put<Creance>(`${this.apiServerUrl}/creances/update/${comId}`, creanceUpdate);
  }

  public deleteCreance(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/creances/delete/${comId}`);
  }
  
}
