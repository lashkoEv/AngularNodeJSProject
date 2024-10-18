import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/IProduct';
import { CartService } from '../../services/cart.service';
import { MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ProductModalWindowService } from '../../services/product-modal-window.service';
import { TranslationService } from '../../services/translation.service';

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
  public selectedLang: string;

  public product: IProduct;

  private id: string;
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private modalWindowService: ProductModalWindowService,
    private traslationService: TranslationService
  ) {}

  ngOnInit() {
    this.productService.getAllFavorite().subscribe((data) => {
      this.products = data;
    });
    this.traslationService.getLanguage().subscribe((data) => {
      this.selectedLang = data;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1205px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '1045px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '985px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '685px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '375px',
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
