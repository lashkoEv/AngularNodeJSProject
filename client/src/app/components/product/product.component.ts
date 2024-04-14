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
  private id: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((data) => {
      this.id = data.id;

      this.productService.getById(this.id).subscribe((data) => {
        this.product = data;
      });
    });
  }
}
