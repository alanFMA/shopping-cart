import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  addProduct(product: any) {
    const currentItems = this.itemsSubject.value;
    this.itemsSubject.next([...currentItems, product]);
  }

  clear() {
    this.itemsSubject.next([]);
  }

  getTotal() {
    return this.itemsSubject.value.reduce((sum, item) => sum + item.price, 0);
  }
}
