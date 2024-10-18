import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { IProduct } from '../../interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public categories: any;
  public products: Observable<IProduct[]>;
  public selectedLang: string;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private cartService: CartService,
    private messageService: MessageService,
    private traslationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
    this.traslationService.getLanguage().subscribe((data) => {
      console.log(this.categories);
      this.selectedLang = data;
    });
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
