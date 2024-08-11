import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/IProduct';
import { CartService } from '../../services/cart.service';
import { MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ProductModalWindowService } from '../../services/product-modal-window.service';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrl: './favorite-products.component.scss',
})
export class FavoriteProductsComponent implements OnInit {
  public products: IProduct[];
  public productsCat: IProduct[];
  current: IProduct;
  visible: boolean = false;
  responsiveOptions: any[] | undefined;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  public product: IProduct;

  private id: string;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private modalWindowService: ProductModalWindowService
  ) {}

  ngOnInit() {
    this.productService.getAllFavorite().subscribe((data) => {
      this.products = data;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
  }

  show(product: IProduct) {
    this.current = product;
    this.visible = true;
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
