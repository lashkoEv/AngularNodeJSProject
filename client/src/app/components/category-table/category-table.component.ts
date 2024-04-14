import { Component, ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { ICategory } from '../../interfaces/ICategory';
import { MatPaginator } from '@angular/material/paginator';
import { FormService } from '../../services/form.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss',
})
export class CategoryTableComponent {
  @ViewChild('paginator') paginator: MatPaginator;

  displayedColumnsCategory = [
    '_id',
    'imgSrc',
    'title',
    'description',
    'delete',
    'update',
  ];

  dataSourceCategory: MatTableDataSource<ICategory>;

  constructor(
    private categoryService: CategoryService,
    public formService: FormService,
    public notification: NotificationService
  ) {
    // categoryService
    //   .add({ title: 'dfdf', description: 'dffddf', imgSrc: 'dfdfdfdf' })
    //   .subscribe((d) => {
    //     console.log(d);
    //   });
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe((data) => {
      this.dataSourceCategory = new MatTableDataSource<ICategory>(data);
      this.dataSourceCategory.paginator = this.paginator;
      this.dataSourceCategory.paginator._intl.itemsPerPageLabel =
        'Категорий на странице: ';
    });
  }
  private getCategory(category: ICategory) {
    const findCategory = this.categoryService.setCategory(category);

    return findCategory;
  }
  
  async deleteCategory(id: String) {
    await this.categoryService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }

  updateCategory(category: ICategory) {
    this.formService.setCategoryId(category._id as string);

    this.getCategory(category);

    this.formService.invokeUpdateCategory();
  }
}
