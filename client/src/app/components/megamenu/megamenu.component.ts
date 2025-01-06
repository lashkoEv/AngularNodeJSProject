import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/ICategory';
import { CategoryService } from '../../services/category.service';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrl: './megamenu.component.scss',
})
export class MegamenuComponent implements OnInit {
  public dropdownCategories: SelectItem[];
  public dropdownCategoriesUA: SelectItem[];
  public selectedCategoryId: any;
  public categories: ICategory[];
  public selectedLang: string;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private traslationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.traslationService.getLanguage().subscribe((data) => {
      this.selectedLang = data;
    });

    this.categoryService.getAll().subscribe((categoryData: ICategory[]) => {
      this.categories = categoryData;
      this.dropdownCategories = categoryData.map((item: ICategory) => {
        return {
          label: item.title.toString() || item.categoryUA?.title.toString(),

          value: item._id,
        };
      });
    });

    this.categoryService.getAll().subscribe((categoryData: ICategory[]) => {
      this.categories = categoryData;
      this.dropdownCategoriesUA = categoryData.map((item: ICategory) => {
        return {
          label: item.categoryUA?.title.toString(),
          value: item._id,
        };
      });
    });
  }

  toShow(event: any): void {
    const selectedCategoryId = event.value;
    const selectedCategory = this.categories.find(
      (category) => category._id === selectedCategoryId
    );
    if (selectedCategory) {
      this.router.navigate(['/category', selectedCategory._id]);
    }
  }
}
