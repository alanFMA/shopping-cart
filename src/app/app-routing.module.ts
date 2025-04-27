import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartViewComponent },
  { path: '**', redirectTo: '' },
];
