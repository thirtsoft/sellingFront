import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.apiServerUrl}/employees/all`);
  }

  public getEmployeById(empId: number): Observable<Employe> {
    return this.http.get<Employe>(`${this.apiServerUrl}/employees/findById/${empId}`);
  }

  public addEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(`${this.apiServerUrl}/employees/create`, employe);
  }

  public updateEmploye(empId: number, employeUpdate: Employe): Observable<Employe> {
    return this.http.put<Employe>(`${this.apiServerUrl}/employees/update/${empId}`, employeUpdate);
  }

  public deleteEmploye(empId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employees/delete/${empId}`);
  }

}
