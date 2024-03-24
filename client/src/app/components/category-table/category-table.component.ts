import { Component, ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { ICategory } from '../../interfaces/ICategory';
import { MatPaginator } from '@angular/material/paginator';

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

  constructor(private categoryService: CategoryService) {
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
    });
  }

  addCategory() {
    // TODO add form
  }

  async deleteCategory(id: String) {
    await this.categoryService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }

  updateCategory(category: ICategory) {
    // TODO add form
  }
}
