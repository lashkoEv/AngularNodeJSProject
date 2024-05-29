import { Component, OnInit, ViewChild } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';

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
  private selectedFile: File | null = null;
  public countries: { country: string }[];
  public availability: { availability: string }[];

  constructor(
    private fb: FormBuilder,
    public formService: FormService,
    private productService: ProductService,
    private http: HttpClient,

    private categoryService: CategoryService,
    private spinner: SpinnerService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.categoriesObs.subscribe((category) => {
      this.categories = category;
      console.log(this.categories);
    });
    this.product = this.productService.getProduct();
    this.countries = this.formService.getAllCountries();
    this.availability = this.formService.getAvailability();
    this.category = this.categoryService.getCategory();
    this.createForm();
  }

  private createForm(): void {
    if (
      this.formService.getIsAddProduct() ||
      this.formService.getIsEditProduct()
    ) {
      if (this.formService.getIsEditProduct()) {
        this.productForm = this.fb.group({
          title: [this.product.title, Validators.required],
          description: [this.product.description, Validators.required],
          wholesalePrice: [this.product.wholesalePrice, Validators.required],
          count: [this.product.count, Validators.required],
          availability: [this.product.availability, Validators.required],
          fields: this.fb.array([]),
          retailPrice: [this.product.retailPrice],
          category: [this.product.category, Validators.required],
          imgSrc: ['', Validators.required],
        });

        for (const item of this.product.fields) {
          this.addField(item.key, item.value);
        }
      } else {
        this.productForm = this.fb.group({
          title: ['', Validators.required],
          description: ['', Validators.required],
          country: [{}, Validators.required],
          wholesalePrice: ['', Validators.required],
          count: ['', Validators.required],
          availability: [{}, Validators.required],
          fields: this.fb.array([]),
          retailPrice: [''],
          category: [{}, Validators.required],
          imgSrc: ['', Validators.required],
        });
      }
    } else if (
      this.formService.getIsAddCategory() ||
      this.formService.getIsUpdateCategory()
    ) {
      if (this.formService.getIsUpdateCategory()) {
        this.productForm = this.fb.group({
          title: [this.category.title, Validators.required],
          description: [this.category.description, Validators.required],
          imgSrc: ['', Validators.required],
        });
      } else {
        this.productForm = this.fb.group({
          title: ['', Validators.required],
          description: ['', Validators.required],
          imgSrc: ['', Validators.required],
        });
      }
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  private createField(key = '', value = ''): FormGroup {
    return this.fb.group({
      key: [key, Validators.required],
      value: [value, Validators.required],
    });
  }

  public addField(key = '', value = '') {
    const fields = this.productForm.get('fields') as FormArray;
    fields.push(this.createField(key, value));
  }

  public invokeEditForm() {
    this.formService.invokeEditForm();
  }
  public invokeAddForm() {
    this.formService.invokeAddForm();
  }
  private async uploadImage(): Promise<string> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('imgSrc', this.selectedFile);
      this.http.post('http://localhost:3000/upload', formData).subscribe(
        (response: any) => {
          console.log('Image uploaded successfully:', response);
          this.selectedFile = null;
          if (response && typeof response.imageUrl === 'string') {
            resolve(`http://localhost:3000/${response.imageUrl}`);
          } else {
            reject('Invalid image URL');
          }
        },
        (error) => {
          console.error('Error uploading image:', error);
          reject(error);
        }
      );
    });
  }

  public async onSubmit() {
    if (this.productForm.valid) {
      const productData: IProduct = this.productForm.value;
      const categoryData: ICategory = this.productForm.value;
      const productUpdateData: IProduct = productData;
      const categoryUpdateData: ICategory = categoryData;
      if (this.formService.getIsAddProduct()) {
        try {
          productData.imgSrc = await this.uploadImage();

          if (this.formService.getIsAddProduct() && productData.imgSrc) {
            this.productService.add(productData).subscribe(
              (response: Response) => {
                console.log('Product added successfully:', response);
                this.notification.setTextOfNotification(
                  `Продукт успешно добавлен ${productData.title}`
                );
                this.formService.hideForm();
                this.productForm.reset();
              },
              (error: Error) => {
                console.error('Error adding product:', error);
                this.notification.setTextOfNotification(
                  `Ошибка в добавлении продукта ${productData.title}, ${error}`
                );
              }
            );
            console.log(productData);
            this.spinner.start();
            this.notification.notify();
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      } else if (this.formService.getIsEditProduct()) {
        try {
          productUpdateData.imgSrc = await this.uploadImage();
          if (this.formService.getIsEditProduct() && productUpdateData.imgSrc) {
            productUpdateData._id = this.formService.getProductId();
            this.productService.update(productUpdateData).subscribe(
              (response: Response) => {
                console.log('Product updated successfully:', response);
                this.notification.setTextOfNotification(
                  `Продукт успешно обновлён ${productUpdateData.title}`
                );
                this.formService.hideForm();
                this.productForm.reset();
              },
              (error: Error) => {
                console.error('Error updating product:', error);
                this.notification.setTextOfNotification(
                  `Ошибка в обновлении продукта ${productUpdateData.title}, ${error}`
                );
              }
            );
            this.spinner.start();
            this.notification.notify();
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      } else if (this.formService.getIsAddCategory()) {
        try {
          categoryData.imgSrc = await this.uploadImage();
          if (this.formService.getIsAddCategory() && categoryData.imgSrc) {
            this.categoryService.add(categoryData).subscribe(
              (response: Response) => {
                console.log('Category added successfully:', response);
                this.notification.setTextOfNotification(
                  `Категория успешно добавлена ${categoryData.title}`
                );
                this.formService.hideForm();
                this.productForm.reset();
              },
              (error: Error) => {
                console.error('Error adding category:', error);
                this.notification.setTextOfNotification(
                  `Ошибка в добавлении категории ${categoryData.title}, ${error}`
                );
              }
            );
            this.spinner.start();
            this.notification.notify();
          }
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      } else if (this.formService.getIsUpdateCategory()) {
        try {
          categoryUpdateData.imgSrc = await this.uploadImage();
          if (
            this.formService.getIsUpdateCategory() &&
            categoryUpdateData.imgSrc
          ) {
            categoryData._id = this.formService.getCategoryId();
            this.categoryService.update(categoryData).subscribe(
              (response: Response) => {
                console.log('Category updated successfully:', response);
                this.notification.setTextOfNotification(
                  `Категория обновлена успешно  ${categoryData.title} `
                );
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
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
    }
  }
}
