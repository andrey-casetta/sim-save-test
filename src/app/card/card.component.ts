import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  productsList;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProductsAPI().subscribe((products) => {
      this.productsList = products;
    });
  }
}
