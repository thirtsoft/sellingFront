import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiServerUrl}/clients/all`);
  }

  public getClientById(clientId: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiServerUrl}/clients/findById/${clientId}`);
  }

  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiServerUrl}/clients/create`, client);
  }

  public updateClient(clientId: number, clientUpdate: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiServerUrl}/clients/update/${clientId}`, clientUpdate);
  }

  public deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/clients/delete/${clientId}`);
  }

}
