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

  addProduct(product: any): void {
    const currentItems = this.itemsSubject.value;
    this.itemsSubject.next([...currentItems, product]);
  }

  clear(): void {
    this.itemsSubject.next([]);
    this.checkoutSuccessSubject.next(false);
  }

  checkout(): void {
    this.loadingSubject.next(true);
    setTimeout(() => {
      this.loadingSubject.next(false);
      this.checkoutSuccessSubject.next(true);
      this.itemsSubject.next([]);
    }, 1500); // Simula um processamento de API
  }

  getTotal(): number {
    return this.itemsSubject.value.reduce((sum, item) => sum + item.price, 0);
  }
}
