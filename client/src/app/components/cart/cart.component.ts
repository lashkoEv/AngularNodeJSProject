import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IOrderedProduct } from '../../interfaces/IOrderedProduct';
import { IUser } from '../../interfaces/IUser';
import { IOrder } from '../../interfaces/IOrder';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  sidebarVisible: boolean = false;
  public products: IOrderedProduct[];
  public cartTotalPrice: number;
  public currentUser: IUser;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.productSubject.subscribe((products: IOrderedProduct[]) => {
      this.products = products;
      this.updateCartTotalPrice();
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

  checkout(currentUser: IUser) {
    if (currentUser) {
      console.error('Нет необходимой информации');
      return;
    }

    const order: IOrder = {
      user: currentUser,
      products: this.products,
      totalPrice: this.cartTotalPrice,
    };

    console.log('Order:', order);

    // this.cartService.resetCart();
  }

  updateCartTotalPrice() {
    this.cartTotalPrice = this.cartService.getCartTotalPrice();
  }
}

// console.log(this.products);
// this.cartService.getCartItems().subscribe((data) => {
//   this.products = data;
// });
