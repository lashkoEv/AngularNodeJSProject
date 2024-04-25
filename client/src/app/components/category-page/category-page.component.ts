import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { PageEvent } from '@angular/material/paginator';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss',
})
export class CategoryPageComponent implements OnInit {
  public categories: any;
  public products: any;
  public toShow: IProduct[];
  public totalItems: number;
  public pageSize: number;
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const categoryID = params['id'];
      this.getCategory(categoryID);
      this.getProducts(categoryID);
    });
  }

  getCategory(categoryID: string) {
    this.categoryService.getById(categoryID).subscribe((data) => {
      this.categories = data;
    });
  }

  async getProducts(categoryID: string) {
    await this.productService.getByCategory(categoryID).subscribe((data) => {
      this.products = data;
      this.totalItems = this.products.length;
      this.toShow = this.products.slice(0, 5);
    });
    this.pageSize = 5;
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.toShow = this.products.slice(startIndex, endIndex);
  }

  // sortProducts(option: string) {
  //   if (option === 'A-Z') {
  //     this.products.sort((a, b) => (a.name > b.name ? 1 : -1));
  //   } else if (option === 'Z-A') {
  //     this.products.sort((a, b) => (a.name < b.name ? 1 : -1));
  //   }
  //   this.toShow = this.products.slice(0, this.pageSize);
  // }

  sortProducts(option: string) {
    console.log(this.products);
    
    switch (option) {
      case 'A-Z':
        this.products.sort((a, b) => (a.title > b.title ? 1 : -1));
        break;
      case 'Z-A':
        this.products.sort((a, b) => (a.title < b.title ? 1 : -1));
        break;
      case 'price-up':
        this.products.sort((a, b) => (a.retailPrice > b.retailPrice ? 1 : -1));
        break;
      case 'price-down':
        this.products.sort((a, b) => (a.retailPrice < b.retailPrice ? 1 : -1));
        break;
      default:
        break;
    }
    
    this.toShow = this.products.slice(0, this.pageSize);
  }
}
