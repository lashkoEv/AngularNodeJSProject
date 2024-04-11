import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-catalogue-dropdown',
  templateUrl: './catalogue-dropdown.component.html',
  styleUrl: './catalogue-dropdown.component.scss',
})
export class CatalogueDropdownComponent implements OnInit {
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
}
