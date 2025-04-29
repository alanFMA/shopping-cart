import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent {
  items$: Observable<any[]>;
  loading$: Observable<boolean>;
  checkoutSuccess$: Observable<boolean>;

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.items$;
    this.loading$ = this.cartService.loading$;
    this.checkoutSuccess$ = this.cartService.checkoutSuccess$;
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  checkout(): void {
    this.cartService.checkout();
  }

  clearCart(): void {
    this.cartService.clear();
  }
}
