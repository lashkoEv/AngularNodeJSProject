import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IOrderedProduct } from '../../interfaces/IOrderedProduct';
import { OrderFormService } from '../../services/order-form.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss',
})
export class OrderPageComponent implements OnInit {
  public products: IOrderedProduct[];
  public cartTotalPrice: number;
  constructor(
    private cartService: CartService,
    private orderFormService: OrderFormService
  ) {}
  ngOnInit(): void {
    this.cartService.productSubject.subscribe((products: IOrderedProduct[]) => {
      this.products = products;
      this.updateCartTotalPrice();
    });
    this.orderFormService.getOrderId();
  }
  public getOrderId() {
    return this.orderFormService.getOrderId();
  }
  updateCartTotalPrice() {
    this.cartTotalPrice = this.cartService.getCartTotalPrice();
  }

  getProducts() {
    return this.products;
  }
}
