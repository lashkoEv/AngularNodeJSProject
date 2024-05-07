import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { Router } from '@angular/router';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  products: IProduct[];
  options: String[];
  selectedItem: IProduct;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.productService.getAll().subscribe((products: IProduct[]) => {
      this.products = products;
      this.options = products.map((p) => p.title);
    });
  }

  search(event: AutoCompleteCompleteEvent) {
    let query = event.query.toLowerCase();

    this.options = this.products
      .filter((p) => p.title.toLowerCase().includes(query))
      .map((p) => p.title);
  }

  toShow(event: any) {
    this.router.navigate([
      '/products',
      this.products.find((p) => p.title === event.value)._id,
    ]);
  }
  // filterProducts(event: AutoCompleteCompleteEvent) {
  //   let filtered: IProduct[] = [];
  //   let query = event.query.toLowerCase();

  //   for (let i = 0; i < this.products.length; i++) {
  //     let product = this.products[i];
  //     if (product.category.title.toLowerCase().startsWith(query)) {
  //       filtered.push(product);
  //     }
  //   }
  //   this.filteredProducts = filtered;
  // }
}
