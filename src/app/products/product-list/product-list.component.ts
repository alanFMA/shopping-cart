import { Component } from '@angular/core';
import { PRODUCTS } from './products.mock';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products = PRODUCTS;

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addProduct(product);
  }
}
