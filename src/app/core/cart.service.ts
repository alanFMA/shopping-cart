import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private checkoutSuccessSubject = new BehaviorSubject<boolean>(false);
  checkoutSuccess$ = this.checkoutSuccessSubject.asObservable();

  addProduct(product: any) {
    const currentItems = this.itemsSubject.value;
    this.itemsSubject.next([...currentItems, product]);
  }

  clear() {
    this.itemsSubject.next([]);
    this.checkoutSuccessSubject.next(false);
  }

  checkout() {
    this.loadingSubject.next(true);
    setTimeout(() => {
      this.loadingSubject.next(false);
      this.checkoutSuccessSubject.next(true);
      this.itemsSubject.next([]);
    }, 1500); // Simula chamada de API
  }

  getTotal() {
    return this.itemsSubject.value.reduce((sum, item) => sum + item.price, 0);
  }
}
