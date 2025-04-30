import { Component, computed, effect, inject } from '@angular/core';
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
  cartService = inject(CartService);

  total = computed(() =>
    this.cartService.items().reduce((acc, item) => acc + item.price, 0)
  );

  constructor() {
    effect(() => {
      const items = this.cartService.items();
      console.log('Itens (effect 1):', items.length);
    });

    effect(() => {
      const names = this.cartService
        .items()
        .map((i) => i.name)
        .join(', ');
      console.log('Itens (effect 2):', names);
    });

    effect(() => {
      if (this.cartService.checkoutSuccess()) {
        alert('Compra realizada com sucesso (com signals)!');
        this.cartService.resetCheckoutSuccess();
      }
    });
  }

  checkout() {
    this.cartService.checkout();
  }

  clearCart() {
    this.cartService.clear();
  }

  getTotal(): number {
    return this.total();
  }
}
