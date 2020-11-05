import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  //usando a api informada no email, por conta do formato do arquivo json, se mostrou necessário com
  //realizar dessa forma, usando um array para a lista.

  //Utilizando a estrutura json do arquivo local 'db.json'
  //não hã necessidade de declarar como array (productsList = []);

  //para alterar entre as duas formas, basta alterar a declaração da variável

  //--> SimSave API
  // productsList = [];

  //--> localhost API
  productsList;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // SimSave API
    this.productsService.getProductsAPI().subscribe((products) => {
      for (let key in products) {
        if (products.hasOwnProperty(key)) {
          for (let index = 0; index < products[key].length; index++) {
            const product = {
              title: products[key][index].title,
              color: products[key][index].color,
              text: products[key][index].text,
            };
            this.productsList.push(product);
          }
        }
      }
    });

    // localhost API
    this.productsService.getProductsLocalAPI().subscribe((products) => {
      this.productsList = products;
    });
  }
}
