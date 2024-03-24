import { AuthorizationService } from './../../services/authorization.service';
import { ICategory } from './../../interfaces/ICategory';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/IProduct';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../services/category.service';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent implements OnInit {
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

  displayedColumnsProduct = [
    '_id',
    'imgSrc',
    'title',
    'description',
    'wholesalePrice',
    'retailPrice',
    'count',
    'category',
    'country',
    'fields',
    'delete',
    'update',
  ];

  dataSourceProduct: MatTableDataSource<IProduct>;

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
    private productService: ProductService,
    private categoryService: CategoryService,
    private authorizationService: AuthorizationService
  ) {
    // for (let i = 0; i < 10; i++) {
    //   productService
    //     .add({
    //       title: 'Title',
    //       description: 'Description',
    //       country: 'Country',
    //       wholesalePrice: '100 грн',
    //       retailPrice: '200 грн',
    //       count: '10 шт.',
    //       fields: '#',
    //       category: 'Category',
    //       imgSrc:
    //         'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
    //     })
    //     .subscribe((d) => {
    //       console.log(d);
    //     });
    // }
  }

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.dataSourceProduct = new MatTableDataSource<IProduct>(data);
      this.dataSourceProduct.paginator = this.paginatorPageSize;
    });

    this.categoryService.getAll().subscribe((data) => {
      this.dataSourceCategory = new MatTableDataSource<ICategory>(data);
    });
  }

  getAuthState() {
    return this.authorizationService.getAuthState();
  }

  addProduct() {
    // TODO add form
  }

  async deleteProduct(id: String) {
    await this.productService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }

  updateProduct(product: IProduct) {
    // TODO add form
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
