import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { ProductService } from './product.service';
import { IProduct } from '../interfaces/IProduct';
import { FormGroup } from '@angular/forms';
import { ICategory } from '../interfaces/ICategory';
import { CategoryService } from './category.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private isEditProduct: boolean = false;
  private isAddProduct: boolean = false;
  private isAddCategory: boolean = false;
  private isUpdateCategory: boolean = false;
  private formTitle: string = '';
  private productId: string = '';
  private categoryId: string = '';

  constructor(
    private productService: ProductService,

    private categoryService: CategoryService,
    private spinner: SpinnerService,
    private notification: NotificationService
  ) {}

  public getFormTitle() {
    return this.formTitle;
  }

  private hideForm() {
    this.isEditProduct = false;
    this.isAddProduct = false;
    this.isAddCategory = false;
    this.isUpdateCategory = false;
  }

  public getIsAddProduct(): boolean {
    return this.isAddProduct;
  }

  public getIsEditProduct(): boolean {
    return this.isEditProduct;
  }

  public getIsAddCategory(): boolean {
    return this.isAddCategory;
  }

  public getIsUpdateCategory(): boolean {
    return this.isUpdateCategory;
  }
  public setProductId(productId: string) {
    this.productId = productId;
  }
  public setCategoryId(categoryId: string) {
    this.categoryId = categoryId;
  }

  public invokeEditForm() {
    this.isEditProduct = true;
    this.isAddProduct = false;
    this.formTitle = 'Редактировать Продукт';
  }
  public invokeAddForm() {
    this.isEditProduct = false;
    this.isAddProduct = true;
    this.formTitle = 'Добавить Продукт';
  }

  public invokeAddCategory() {
    this.isAddCategory = true;
    this.isUpdateCategory = false;
    this.formTitle = 'Добавить Категорию';
    return this.isAddCategory;
  }
  public invokeUpdateCategory() {
    this.isUpdateCategory = true;
    this.isAddCategory = false;
    this.formTitle = 'Редактировать Категорию';
    return this.isUpdateCategory;
  }

  public onSubmit(form: FormGroup): void {
    if (form.valid) {
      const productData: IProduct = form.value;
      const categoryData: ICategory = form.value;
      if (this.isAddProduct) {
        this.productService.add(productData).subscribe(
          (response: Response) => {
            console.log('Product added successfully:', response);
            this.notification.setTextOfNotification(
              `Продукт '${productData.title}' успешно добавлен!`
            );
            // Clear form after add product
            this.hideForm();
            form.reset();
          },
          (error: Error) => {
            console.error('Error adding product:', error);
            this.notification.setTextOfNotification(
              `Ошибка в добавлении продукта ${productData.title}, ${error}`
            );
          }
        );
        this.spinner.start();

        this.notification.notify();
      } else if (this.isEditProduct) {
        productData._id = this.productId;
        this.productService.update(productData).subscribe(
          (response: Response) => {
            console.log('Product updated successfully:', response);
            this.notification.setTextOfNotification(
              `Продукт '${productData.title}' успешно обновлён!`
            );
            // Clear form after add product
            this.hideForm();
            form.reset();
          },
          (error: Error) => {
            console.error('Error updating product:', error);
            this.notification.setTextOfNotification(
              `Ошибка в обновлении продукта ${productData.title}, ${error}`
            );
          }
        );
        this.spinner.start();

        this.notification.notify();
      } else if (this.isAddCategory) {
        this.categoryService.add(categoryData).subscribe(
          (response: Response) => {
            console.log('Category added successfully:', response);
            this.notification.setTextOfNotification(
              `Категория '${categoryData.title}' успешно добавлена!`
            );

            this.hideForm();
            form.reset();
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
      } else if (this.isUpdateCategory) {
        categoryData._id = this.categoryId;
        this.categoryService.update(categoryData).subscribe(
          (response: Response) => {
            console.log('Category update successfully:', response);
            this.notification.setTextOfNotification(
              `Категория '${categoryData.title}' обновлена успешно!`
            );

            this.hideForm();
            form.reset();
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
    {
    }
  }
}
