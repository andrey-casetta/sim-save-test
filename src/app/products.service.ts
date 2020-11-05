import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private readonly urlAPI = 'https://teste-simsave.getsandbox.com/home';
  private readonly localAPI = 'http://localhost:3000/products';

  getProductsAPI() {
    return this.http.get(this.urlAPI);
  }

  getProductsLocalAPI() {
    return this.http.get(this.localAPI);
  }
}
