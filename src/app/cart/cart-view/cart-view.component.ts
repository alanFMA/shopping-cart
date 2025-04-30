import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../core/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent implements OnInit, OnDestroy {
  items$ = this.cartService.items$;
  loading$ = this.cartService.loading$;
  checkoutSuccess$ = this.cartService.checkoutSuccess$;

  private subscriptions: Subscription[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.cartService.items$.subscribe((items) => {
        console.log('Itens (sub 1):', items.length);
      })
    );

    this.subscriptions.push(
      this.cartService.items$.subscribe((items) => {
        console.log('Itens (sub 2):', items.map((i) => i.name).join(', '));
      })
    );

    this.subscriptions.push(
      this.cartService.checkoutSuccess$.subscribe((success) => {
        if (success) {
          alert('Compra realizada com sucesso (do subscribe em ngOnInit)!');
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clear();
  }

  checkout() {
    this.cartService.checkout();

    this.cartService.checkoutSuccess$.subscribe((success) => {
      if (success) {
        alert('Compra finalizada com alerta duplicado!');
      }
    });
  }
}
