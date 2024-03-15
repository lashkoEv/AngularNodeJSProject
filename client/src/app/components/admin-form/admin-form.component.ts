import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrl: './admin-form.component.scss',
})
export class AdminFormComponent {
  public productForm: FormGroup;
  public isEditProduct: boolean = false;
  public isAddProduct: boolean = false;
  public formTitle: string = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private spinner: SpinnerService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      country: ['', Validators.required],
      price: ['', Validators.required],
      count: ['', Validators.required],
      fields: [''],
      category: [''],
      imgSrc: [''],
    });
  }
  public invokeEditForm() {
    this.isEditProduct = true;
    this.isAddProduct = false;
    this.formTitle = 'Редактировать продукт';
    console.log('[EDIT]', this.isEditProduct);
    console.log('[ADD]', this.isAddProduct);
  }
  public invokeAddForm() {
    this.isEditProduct = false;
    this.isAddProduct = true;
    this.formTitle = 'Добавить Продукт';
    console.log('[EDIT]', this.isEditProduct);
    console.log('[ADD]', this.isAddProduct);
  }

  public onSubmit(): void {
    if (this.productForm.valid) {
      const productData: IProduct = this.productForm.value;
      if (this.isAddProduct) {
        this.productService.add(productData).subscribe(
          (response: Response) => {
            console.log('Product added successfully:', response);
            // Clear form after add product
            this.productForm.reset();
          },
          (error: Error) => {
            console.error('Error adding product:', error);
          }
        );
      } else if (this.isEditProduct) {
        // id is just for example of editing product by id, need to find a way how get productId
        productData._id = '65f49f216028bd5de2b8264e';
        this.productService.update(productData).subscribe(
          (response: Response) => {
            console.log('Product updated successfully:', response);
            // Clear form after add product
            this.productForm.reset();
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
