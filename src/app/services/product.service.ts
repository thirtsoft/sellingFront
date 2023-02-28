import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServerUrl}/products/all`);
  }

  public getProductById(prodId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiServerUrl}/products/findById/${prodId}`);
  }

  getProductByCodebar(barCode: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiServerUrl}/products/searchProductByBarCode/${barCode}`);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/products/create`, product);
  }

  public updateProduct(prodId: number, productUpdate: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiServerUrl}/products/update/${prodId}`, productUpdate);
  }

  public deleteProduct(prodId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/products/delete/${prodId}`);
  }

}
