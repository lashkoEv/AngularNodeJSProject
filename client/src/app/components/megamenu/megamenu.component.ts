import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/ICategory';
import { CategoryService } from '../../services/category.service';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrl: './megamenu.component.scss',
})
export class MegamenuComponent implements OnInit {
  public dropdownCategories: SelectItem[];
  public selectedCategoryId: any;
  public categories: ICategory[];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categoryData: ICategory[]) => {
      this.categories = categoryData;
      this.dropdownCategories = categoryData.map((item: ICategory) => {
        return {
          label: item.title.toString(),
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

// getCategory(categoryID: string) {
//   this.categoryService.getById(categoryID).subscribe((data) => {
//     this.category = data;

//     this.items = [
//       { label: 'Каталог', routerLink: '/catalogue' },
//       {
//         label: `${this.category.title}`,
//         routerLink: ['/category', this.category._id],
//       },
//     ];

// this.route.params.subscribe((data) => {
//   this.categoryService.getAll().subscribe((categoryData) => {
//     this.category = categoryData;

//     const categoryItems: MenuItem[] = this.category.map((item) => {
//       return {
//         label: item.title.toString(),
//         icon: 'pi pi-box',
//         routerLink: ['/category', item._id],
//       };
//     });
//     this.items = [
//       {
//         label: 'Каталог',
//         icon: 'pi pi-box',
//         routerLink: '/catalogue',
//         items: [categoryItems],
//       },
//     ];
//   });
// });
