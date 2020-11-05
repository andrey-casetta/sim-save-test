import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // productsList = [];
  productsList;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    //Sim save API
    // this.productsService.getProducts().subscribe((products) => {
    //   for (let key in products) {
    //     if (products.hasOwnProperty(key)) {
    //       for (let index = 0; index < products[key].length; index++) {
    //         const product = {
    //           title: products[key][index].title,
    //           color: products[key][index].color,
    //           text: products[key][index].text,
    //         };
    //         this.productsList.push(product);
    //       }
    //     }
    //   }
    // });
    this.productsService.getProducts().subscribe((products) => {
      this.productsList = products;
    });
  }
}
