import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { FormService } from '../../services/form.service';
import { IColumn } from '../../interfaces/IColumn';
import { ConfirmationService, MessageService } from 'primeng/api';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent implements OnInit {
  visible: boolean = false;
  current: IProduct;
  products!: IProduct[];
  cols!: IColumn[];

  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public formService: FormService
  ) {}

  private getProduct(product: IProduct) {
    const findProduct = this.productService.setProduct(product);
    return findProduct;
  }
  addProduct() {
    const resetProduct = null;
    this.productService.setProduct(resetProduct);
    this.formService.invokeAddForm();
    this.ngOnInit();
  }
  async deleteProduct(id: String) {
    await this.productService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }
  updateProduct(product: IProduct) {
    this.formService.setProductId(product._id as string);
    this.getProduct(product);
    this.formService.invokeEditForm();
    this.ngOnInit();
  }

  duplicateProduct(product: IProduct) {
    const clonedProduct = cloneDeep(product);
    const { _id, ...productWithoutId } = clonedProduct; // Exclude _id

    this.productService.add(productWithoutId).subscribe(
      (newProduct: IProduct) => {
        this.products.push(newProduct); // Add the new product to the list
        this.messageService.add({
          severity: 'success',
          summary: 'Продукт продублирован',
          detail: `Продукт ${newProduct.title} успешно продублирован`,
        });
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ошибка. Дубликат не сформирован',
          detail: `Дубликат продукта не сформирован: ${error.message}`,
        });
      }
    );
  }

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });

    this.cols = [
      { field: '_id', header: 'Код' },
      { field: 'imgSrc', header: 'Фото' },
      { field: 'title', header: 'Название' },
      { field: 'description', header: 'Описание' },
      { field: 'category', header: 'Категория' },
      { field: 'wholesalePrice', header: 'Оптовая цена' },
      { field: 'retailPrice', header: 'Розничная цена' },
      { field: 'count', header: 'Количество' },
      { field: 'country', header: 'Страна' },
      { field: 'fields', header: 'Характеристики' },
      { field: '', header: '' },
      { field: '', header: '' },
      { field: '', header: '' },
    ];
  }

  show(product: IProduct) {
    this.current = product;
    this.visible = true;
  }

  confirm(event: Event, id: String) {
    this.confirmationService.confirm({
      key: 'popup2',
      target: event.target as EventTarget,
      message: 'Вы точно хотите удалить запись?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      acceptLabel: ' ',
      rejectLabel: ' ',
      accept: () => {
        setTimeout(() => {
          this.deleteProduct(id);
        }, 2100);
        this.messageService.clear();
        this.messageService.add({
          severity: 'info',
          summary: 'Запись удалена!',
          detail: 'Запись удалена успешно!',
        });
      },
      reject: () => {
        this.messageService.clear();
        this.messageService.add({
          severity: 'warn',
          summary: 'Удаление отменено!',
          detail: 'Запись не удалена!',
        });
      },
    });
  }
}
