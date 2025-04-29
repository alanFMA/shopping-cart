import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { EmptyCartComponent } from '../empty-cart/empty-cart.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { CartService } from '../../core/cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [
    CommonModule,
    CartItemComponent,
    EmptyCartComponent,
    ButtonComponent,
  ],
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent {
  constructor(public cartService: CartService) {}

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
