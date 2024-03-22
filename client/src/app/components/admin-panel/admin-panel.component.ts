import { AuthorizationService } from './../../services/authorization.service';
import { ICategory } from './../../interfaces/ICategory';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/IProduct';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../services/category.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent implements OnInit {
  displayedColumnsProduct = [
    '_id',
    'imgSrc',
    'title',
    'description',
    'price',
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
    private authorizationService: AuthorizationService,
    public formService: FormService
  ) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.dataSourceProduct = new MatTableDataSource<IProduct>(data);
    });

    this.categoryService.getAll().subscribe((data) => {
      this.dataSourceCategory = new MatTableDataSource<ICategory>(data);
    });
  }

  getAuthState() {
    return this.authorizationService.getAuthState();
  }

  addProduct() {
    this.formService.invokeAddForm();
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
    this.formService.setProductId(product._id as string);
    this.formService.invokeEditForm();
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
