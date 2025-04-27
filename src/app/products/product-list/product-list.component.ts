import { Component } from '@angular/core';
import { PRODUCTS } from '../products.mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = PRODUCTS;
}
