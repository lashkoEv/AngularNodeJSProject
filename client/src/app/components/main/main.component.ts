import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { IProduct } from '../../interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public categories: any;
  public products: Observable<IProduct[]>;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }
  getProducts() {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  getCategories() {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    this.messageService.add({
      severity: 'success',
      summary: `Продукт добавлен в корзину!`,
      detail: `Продукт ${product.title} добавлен в корзину!`,
    });
  }
}
