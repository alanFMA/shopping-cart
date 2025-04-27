import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
