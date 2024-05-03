import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  public product: IProduct;
  public products: IProduct[];
  private id: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
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
          .getByCategory(this.product.category._id)
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

  addToCart(product: IProduct) {
    this.cartService.add(product);
    console.log(product);
    this.messageService.add({
      severity: 'success',
      summary: `Продукт добавлен в корзину!`,
      detail: `Продукт ${product.title} добавлен в корзину!`,
    });
  }
}
