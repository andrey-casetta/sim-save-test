import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private readonly urlAPI = 'https://teste-simsave.getsandbox.com/home';

  getProducts() {
    return this.http.get<Product[]>(this.urlAPI).pipe(tap(console.log));
  }
}
