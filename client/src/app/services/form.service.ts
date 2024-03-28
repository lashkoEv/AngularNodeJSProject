import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { ProductService } from './product.service';
import { IProduct } from '../interfaces/IProduct';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private isEditProduct: boolean = false;
  private isAddProduct: boolean = false;
  private formTitle: string = '';
  private productId: string = '';

  constructor(
    private productService: ProductService,
    private spinner: SpinnerService
  ) {}

  public getFormTitle() {
    return this.formTitle;
  }

  private hideForm() {
    this.isEditProduct = false;
    this.isAddProduct = false;
  }

  public getIsAddProduct() {
    return this.isAddProduct;
  }
  public getIsEditProduct() {
    return this.isEditProduct;
  }
  public setProductId(productId: string) {
    this.productId = productId;
  }

  public invokeEditForm() {
    this.isEditProduct = true;
    this.isAddProduct = false;
    this.formTitle = 'Редактировать продукт';
  }
  public invokeAddForm() {
    this.isEditProduct = false;
    this.isAddProduct = true;
    this.formTitle = 'Добавить Продукт';
  }

  public onSubmit(productForm: FormGroup): void {
    if (productForm.valid) {
      const productData: IProduct = productForm.value;
      if (this.isAddProduct) {
        this.productService.add(productData).subscribe(
          (response: Response) => {
            console.log('Product added successfully:', response);
            // Clear form after add product
            this.hideForm();
            productForm.reset();
          },
          (error: Error) => {
            console.error('Error adding product:', error);
          }
        );
      } else if (this.isEditProduct) {
        productData._id = this.productId;
        this.productService.update(productData).subscribe(
          (response: Response) => {
            console.log('Product updated successfully:', response);
            // Clear form after add product
            this.hideForm();
            productForm.reset();
          },
          (error: Error) => {
            console.error('Error updating product:', error);
          }
        );
      }
      this.spinner.start();
    }
  }
}
