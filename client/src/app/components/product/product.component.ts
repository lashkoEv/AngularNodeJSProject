import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  public product: IProduct;
  public products: IProduct[];
  private id: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((data) => {
      this.id = data.id;

      this.productService.getById(this.id).subscribe((data) => {
        this.product = data;
        console.log(this.product);
        productService
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
}
