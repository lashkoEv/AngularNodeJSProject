import { Injectable } from '@angular/core';

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

  private availabilities: { availability: string }[] = [
    { availability: 'Есть в наличии' },
    { availability: 'Нет в наличии' },
  ];

  private countries: { country: string }[] = [
    { country: 'Афганистан' },
    { country: 'Албания' },
  ];

  constructor() {}

  public getFormTitle() {
    return this.formTitle;
  }

  public getAllCountries(): { country: string }[] {
    return this.countries;
  }

  public getAvailability(): { availability: string }[] {
    return this.availabilities;
  }

  public hideForm() {
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

  public getProductId() {
    return this.productId;
  }
  public getCategoryId() {
    return this.categoryId;
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
}
