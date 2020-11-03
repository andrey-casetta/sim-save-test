import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service
      .getProducts()
      .subscribe((product) => (this.products = product));

    console.log(this.products);
  }
}
