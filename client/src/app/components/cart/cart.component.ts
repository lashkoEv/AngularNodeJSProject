import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IOrderedProduct } from '../../interfaces/IOrderedProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  sidebarVisible: boolean = false;
  public products: IOrderedProduct[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.productSubject.subscribe((products: IOrderedProduct[]) => {
      this.products = products;
    });
  }

  getProducts() {
    return this.products;
  }

  increase(product: IOrderedProduct) {
    this.cartService.increase(product);
  }

  decrease(product: IOrderedProduct) {
    this.cartService.decrease(product);
  }

  remove(product: IOrderedProduct) {
    this.cartService.remove(product);
  }
}
// this.cartService.getCartItems().subscribe((data) => {
//   this.products = data;
// });
