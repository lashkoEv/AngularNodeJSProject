import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  public product: IProduct;
  public products: IProduct[];
  private id: string;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.id = data.id;

      this.productService.getById(this.id).subscribe((data) => {
        this.product = data;

        this.productService
          .getByCategory(this.product.category)
          .subscribe((data) => {
            this.products = data;

            this.products = this.products.filter(
              (p) => p._id !== this.product._id
            );

            if (this.products.length > 5) {
              this.products = this.products.slice(0, 5);
            }
          });
      });
    });
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    console.log(product);
  }
}
