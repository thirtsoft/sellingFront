import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subcategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllSubCategories(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.apiServerUrl}/subcategories/all`);
  }

  public getSubCategoryById(subCatId: number): Observable<Subcategory> {
    return this.http.get<Subcategory>(`${this.apiServerUrl}/subcategories/findById/${subCatId}`);
  }

  public addSubCategory(subCategory: Subcategory): Observable<Subcategory> {
    return this.http.post<Subcategory>(`${this.apiServerUrl}/subcategories/create`, subCategory);
  }

  public updateSubCategory(subCatId: number, subCategoryUpdate: Subcategory): Observable<Subcategory> {
    return this.http.put<Subcategory>(`${this.apiServerUrl}/subcategories/update/${subCatId}`, subCategoryUpdate);
  }

  public deleteSubCategory(subCatId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/subcategories/delete/${subCatId}`);
  }

}
