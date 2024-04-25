import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormService } from '../../services/form.service';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { NotificationService } from '../../services/notification.service';
import { SpinnerService } from '../../services/spinner.service';
import { IProduct } from '../../interfaces/IProduct';
import { ICategory } from '../../interfaces/ICategory';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.scss',
})
export class AdminFormComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  public productForm: FormGroup;
  public dataSourceProduct: MatTableDataSource<IProduct>;
  public dataSourceCategory: MatTableDataSource<ICategory>;
  private categoriesObs: any = this.categoryService.getAll();
  public categories: {}[] = [];
  public category: ICategory;
  public product: IProduct;

  constructor(
    private fb: FormBuilder,
    public formService: FormService,
    private productService: ProductService,

    private categoryService: CategoryService,
    private spinner: SpinnerService,
    private notification: NotificationService,

    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.categoriesObs.subscribe((category) => {
      this.categories = category;
    });
    this.createForm();

    this.product = this.productService.getProduct();
    this.category = this.categoryService.getCategory();

    this.updateProductsAndCategory();
  }
  private createForm(): void {
    if (
      this.formService.getIsAddProduct() ||
      this.formService.getIsEditProduct()
    ) {
      this.productForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        country: ['', Validators.required],
        wholesalePrice: ['', Validators.required],
        count: ['', Validators.required],
        fields: this.fb.array([]),
        retailPrice: [''],
        category: [''],
        imgSrc: [''],
      });
    } else if (
      this.formService.getIsAddCategory() ||
      this.formService.getIsUpdateCategory()
    ) {
      this.productForm = this.fb.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        imgSrc: [''],
      });
    }
  }
  private updateProductsAndCategory() {
    this.productService.getAll().subscribe((data) => {
      this.dataSourceProduct = new MatTableDataSource<IProduct>(data);
      this.dataSourceProduct.paginator = this.paginator;
      this.dataSourceProduct.paginator._intl.itemsPerPageLabel =
        'Продуктов на странице: ';
    });

    this.categoryService.getAll().subscribe((data) => {
      this.dataSourceCategory = new MatTableDataSource<ICategory>(data);
      this.dataSourceCategory.paginator = this.paginator;
      this.dataSourceCategory.paginator._intl.itemsPerPageLabel =
        'Категорий на странице: ';
    });
  }

  private createField(): FormGroup {
    return this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  public addField() {
    const fields = this.productForm.get('fields') as FormArray;
    fields.push(this.createField());
  }

  public invokeEditForm() {
    this.formService.invokeEditForm();
  }
  public invokeAddForm() {
    this.formService.invokeAddForm();
  }

  public onSubmit(): void {
    if (this.productForm.valid) {
      const productData: IProduct = this.productForm.value;
      const categoryData: ICategory = this.productForm.value;
      if (this.formService.getIsAddProduct()) {
        this.productService.add(productData).subscribe(
          (response: Response) => {
            console.log('Product added successfully:', response);
            this.messageService.clear();
            this.messageService.add({
              severity: 'success',
              summary: 'Продукт добавлен!',
              detail: `Продукт ${productData.title} успешно добавлен!`,
            });

            // this.notification.setTextOfNotification(
            //   `Продукт успешно добавлен ${productData.title}`
            // );
            // Clear form after add product
            this.updateProductsAndCategory();
            this.formService.hideForm();
            this.productForm.reset();
          },
          (error: Error) => {
            console.error('Error adding product:', error);
            console.log(productData);
            this.messageService.clear();
            this.messageService.add({
              severity: 'danger',
              summary: 'Ошибка добавления!',
              detail: `Ошибка в добавлении продукта ${productData.title}, ${error}!`,
            });
            // this.notification.setTextOfNotification(
            //   `Ошибка в добавлении продукта ${productData.title}, ${error}`
            // );
          }
        );
        this.spinner.start();

        this.notification.notify();
      } else if (this.formService.getIsEditProduct()) {
        productData._id = this.formService.getProductId();

        this.productService.update(productData).subscribe(
          (response: Response) => {
            console.log('Product updated successfully:', response);
            this.messageService.clear();
            this.messageService.add({
              severity: 'success',
              summary: 'Продукт обновлён!',
              detail: `Продукт ${productData.title} успешно обновлён!`,
            });
            // this.notification.setTextOfNotification(
            //   `Продукт успешно обновлён ${productData.title}`
            // );
            // Clear form after add product
            this.updateProductsAndCategory();
            this.formService.hideForm();
            this.productForm.reset();
          },
          (error: Error) => {
            console.error('Error updating product:', error);
            this.messageService.clear();
            this.messageService.add({
              severity: 'danger',
              summary: 'Ошибка обновления!',
              detail: `Ошибка в обновлении продукта ${productData.title}, ${error}!`,
            });
            // this.notification.setTextOfNotification(
            //   `Ошибка в обновлении продукта ${productData.title}, ${error}`
            // );
          }
        );
        this.spinner.start();

        this.notification.notify();
      } else if (this.formService.getIsAddCategory()) {
        this.categoryService.add(categoryData).subscribe(
          (response: Response) => {
            console.log('Category added successfully:', response);
            this.notification.setTextOfNotification(
              `Категория успешно добавлена ${categoryData.title}`
            );
            this.updateProductsAndCategory();
            this.formService.hideForm();
            this.productForm.reset();
          },
          (error: Error) => {
            console.error('Error additing category:', error);
            this.notification.setTextOfNotification(
              `Ошибка в добавлении категории ${categoryData.title}, ${error}`
            );
          }
        );
        this.spinner.start();

        this.notification.notify();
      } else if (this.formService.getIsUpdateCategory()) {
        categoryData._id = this.formService.getCategoryId();
        this.categoryService.update(categoryData).subscribe(
          (response: Response) => {
            console.log('Category update successfully:', response);
            this.notification.setTextOfNotification(
              `Категория обновлена успешно  ${categoryData.title} `
            );
            this.updateProductsAndCategory();
            this.formService.hideForm();
            this.productForm.reset();
          },
          (error: Error) => {
            console.error('Error updating category:', error);
            this.notification.setTextOfNotification(
              `Ошибка в обновлении категории ${categoryData.title}, ${error}`
            );
          }
        );
        this.spinner.start();

        this.notification.notify();
      }
    }
  }
}
