import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiServerUrl}/categories/all`);
  }

  public getCategoryById(catId: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiServerUrl}/categories/findById/${catId}`);
  }

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiServerUrl}/categories/create`, category);
  }

  public updateCategory(catId: number, categoryUpdate: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiServerUrl}/categories/update/${catId}`, categoryUpdate);
  }

  public deleteCategory(catId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/categories/delete/${catId}`);
  }
  

}
