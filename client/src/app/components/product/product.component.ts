import { Component, HostListener, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MenuItem, MessageService } from 'primeng/api';
import { TranslationService } from '../../services/translation.service';
import { IOrderedProduct } from '../../interfaces/IOrderedProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  public isMobile: boolean = false;

  public product: IProduct;
  public products: IProduct[];
  public orderedProducts: IOrderedProduct[];
  private id: string;
  public selectedLang: string;
  public count: number = 1;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private traslationService: TranslationService
  ) {
    this.traslationService.getLanguage().subscribe((data) => {
      this.selectedLang = data;
      console.log(this.product);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth <= 800;
  }

  ngOnInit() {
    this.isMobile = window.innerWidth <= 800;
    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.route.params.subscribe((data) => {
      this.id = data.id;

      this.productService.getById(this.id).subscribe((data) => {
        this.product = data;

        this.items = [
          { label: 'Каталог', routerLink: '/catalogue' },
          {
            label: `${this.product.category.title}`,
            routerLink: ['/category', this.product.category._id],
          },
          {
            label: `${this.product.title}`,
            routerLink: ['/products', this.product._id],
          },
        ];

        this.productService
          .getByCategory(this.product.category)
          .subscribe((data) => {
            this.products = data;

            this.products = this.products.filter(
              (p) => p._id !== this.product._id
            );

            if (this.products.length > 6) {
              this.products = this.products.slice(0, 6);
            }
          });
      });
    });
  }
  getProducts() {
    return this.product;
  }

  increase() {
    this.count++;
  }

  decrease() {
    if (this.count > 1) {
      this.count--;
    }
  }

  addToCart() {
    const orderedProduct: IOrderedProduct = {
      product: this.product,
      count: this.count,
    };

    this.cartService.addToCart(orderedProduct);
    console.log(orderedProduct);

    this.messageService.add({
      severity: 'success',
      summary: `Продукт добавлен в корзину!`,
      detail: `Продукт ${this.product.title} добавлен в корзину в количестве ${this.count}!`,
    });

    // Reset the count after adding to cart
    this.count = 1;
  }
}
