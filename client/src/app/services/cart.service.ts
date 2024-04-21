import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { IOrderedProduct } from '../interfaces/IOrderedProduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: IOrderedProduct[] = [];
  public productSubject = new BehaviorSubject<IOrderedProduct[]>([]);
  constructor(private http: HttpClient) {}

  getCartItems() {
    return this.products;
  }

  add(addedProduct: IProduct) {
    let isNew = true;
    for (let product of this.products) {
      if (product.product === addedProduct) {
        isNew = false;
        product.count++;
      }
    }
    if (isNew) {
      this.products.push({
        product: addedProduct,
        count: 1,
      });
    }
    this.productSubject.next(this.products);
  }

  increase(product: IOrderedProduct) {
    const found = this.find(product);

    if (found.count <= parseInt(found.product.count.toString())) {
      found.count++;
    }
    this.productSubject.next(this.products);
  }

  decrease(product: IOrderedProduct) {
    const found = this.find(product);

    found.count--;

    if (found.count < 1) {
      this.remove(found);
    }
    this.productSubject.next(this.products);
  }

  find(product: IOrderedProduct) {
    return this.products.find((p) => p === product);
  }

  remove(removedProduct: IOrderedProduct) {
    console.log('Before remove:', this.products);
    this.products = this.products.filter(
      (p) => p.product._id !== removedProduct.product._id
    );
    console.log('After remove:', this.products);
    this.productSubject.next(this.products);
  }

  save(): Observable<any> {
    return this.http.post('http://localhost:3000/cart', this.products).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
}
