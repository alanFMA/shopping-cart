import { Component } from '@angular/core';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent {
  items$ = this.cartService.items$;
  loading$ = this.cartService.loading$;
  checkoutSuccess$ = this.cartService.checkoutSuccess$;

  constructor(private cartService: CartService) {}

  getTotal() {
    return this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clear();
  }

  checkout() {
    this.cartService.checkout();
  }
}
