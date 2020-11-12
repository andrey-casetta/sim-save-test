import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private readonly urlAPI = 'http://api.simsave.com.br/v1/test-api/home';

  getProductsAPI() {
    return this.http.get(this.urlAPI);
  }
}
