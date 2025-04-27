import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartViewComponent, CartItemComponent, EmptyCartComponent],
  imports: [CommonModule, SharedModule],
  exports: [CartViewComponent],
})
export class CartModule {}
