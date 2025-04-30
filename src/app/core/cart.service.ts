import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<any[]>([]);
  loading = signal(false);
  checkoutSuccess = signal(false);

  hasItems = computed(() => this.items().length > 0);
  isEmpty = computed(() => this.items().length === 0);

  addProduct(product: any) {
    this.items.update((items) => [...items, product]);
  }

  clear() {
    this.items.set([]);
    this.checkoutSuccess.set(false);
  }

  checkout() {
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.checkoutSuccess.set(true);
      this.clear();
    }, 1500);
  }

  getTotal() {
    return this.items().reduce((sum, item) => sum + item.price, 0);
  }

  resetCheckoutSuccess() {
    this.checkoutSuccess.set(false);
  }
}
