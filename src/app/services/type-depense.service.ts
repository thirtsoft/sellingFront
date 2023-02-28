import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeDepense } from '../models/type-depense';

@Injectable({
  providedIn: 'root'
})
export class TypeDepenseService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllTypeDepenses(): Observable<TypeDepense[]> {
    return this.http.get<TypeDepense[]>(`${this.apiServerUrl}/categoriesCharges/all`);
  }

  public getTypeDepenseById(comId: number): Observable<TypeDepense> {
    return this.http.get<TypeDepense>(`${this.apiServerUrl}/categoriesCharges/findById/${comId}`);
  }

  public addTypeDepense(typeDepense: TypeDepense): Observable<TypeDepense> {
    return this.http.post<TypeDepense>(`${this.apiServerUrl}/categoriesCharges/create`, typeDepense);
  }

  public updateTypeDepense(comId: number, typeDepenseUpdate: TypeDepense): Observable<TypeDepense> {
    return this.http.put<TypeDepense>(`${this.apiServerUrl}/categoriesCharges/update/${comId}`, typeDepenseUpdate);
  }

  public deleteTypeDepense(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/categoriesCharges/delete/${comId}`);
  }

}
