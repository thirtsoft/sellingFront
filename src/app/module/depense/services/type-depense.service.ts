import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeDepense } from 'src/app/models/type-depense';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeDepenseService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllTypeDepenses(): Observable<TypeDepense[]> {
    return this.http.get<TypeDepense[]>(`${this.apiServerUrl}/typedepense/all`);
  }

  public getTypeDepenseById(comId: number): Observable<TypeDepense> {
    return this.http.get<TypeDepense>(`${this.apiServerUrl}/typedepense/findById/${comId}`);
  }

  public addTypeDepense(typeDepense: TypeDepense): Observable<TypeDepense> {
    return this.http.post<TypeDepense>(`${this.apiServerUrl}/typedepense/create`, typeDepense);
  }

  public updateTypeDepense(comId: number, typeDepenseUpdate: TypeDepense): Observable<TypeDepense> {
    return this.http.put<TypeDepense>(`${this.apiServerUrl}/typedepense/update/${comId}`, typeDepenseUpdate);
  }

  public deleteTypeDepense(comId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/typedepense/delete/${comId}`);
  }

}
