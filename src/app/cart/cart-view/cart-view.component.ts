import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
})
export class CartViewComponent {
  items$ = this.cartService.items$;

  constructor(private cartService: CartService) {}

  getTotal() {
    return this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clear();
  }
}
