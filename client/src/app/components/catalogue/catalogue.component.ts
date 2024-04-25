import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss',
})
export class CatalogueComponent implements OnInit {
  public categories: any;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories() {
    await this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }

  sortCategories(option: string) {
    if (option === 'A-Z') {
      this.categories.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (option === 'Z-A') {
      this.categories.sort((a, b) => (a.title < b.title ? 1 : -1));
    }
  }

  // sortCategories(option: string) {
  //   switch (option) {
  //     case 'A-Z':
  //       this.categories.sort((a, b) => (a.title > b.title ? 1 : -1));
  //       break;
  //     case 'Z-A':
  //       this.categories.sort((a, b) => (a.title < b.title ? 1 : -1));
  //       break;
  //     case 'price increase':
  //       this.categories.sort((a, b) => (a.price > b.price ? 1 : -1));
  //       break;
  //     case 'price descending':
  //       this.categories.sort((a, b) => (a.price < b.price ? 1 : -1));
  //       break;
  //     default:
  //       break;
  //   }
  // }
}
