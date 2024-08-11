import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { FormService } from '../../services/form.service';
import { IColumn } from '../../interfaces/IColumn';
import { ConfirmationService, MessageService } from 'primeng/api';
import { cloneDeep } from 'lodash';
import { Table } from 'primeng/table';

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
  loading: boolean = true;
  favoriteProducts: { [key: string]: boolean } = {};
  fav: IProduct[];

  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public formService: FormService
  ) {
    this.productService.getAllFavorite().subscribe((data) => {
      this.fav = data;
    });
  }

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

  async deleteFavoriteProduct(id: String) {
    await this.productService.deleteFavoriteById(id).subscribe((data) => {
      if (data.ok) {
        console.log('favorite deleted');
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
    const { _id, ...productWithoutId } = clonedProduct;

    this.productService.add(productWithoutId).subscribe(
      (newProduct: IProduct) => {
        this.products.push(newProduct);
        this.messageService.add({
          severity: 'success',
          summary: 'Product Duplicated',
          detail: `Product ${newProduct.title} has been duplicated successfully`,
        });
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Duplication Failed',
          detail: `Product duplication failed: ${error.message}`,
        });
      }
    );
  }

  toggleFavorite(productId: string) {
    const wasFavorite = this.isFavorite(productId);
    const product = this.productService.getById(productId);
    product.subscribe((data: IProduct) => {
      data.id = productId;
      if (!wasFavorite && this.fav.length <= 6) {
        this.productService.addFavorite(data).subscribe((response) => {
          this.fav.push(data);
          console.log(data, 'added', response);
        });
      } else if (wasFavorite && this.fav.length >= 0) {
        this.productService
          .deleteFavoriteById(data.id)
          .subscribe((response) => {
            this.fav = this.fav.filter((item) => item.id !== productId);
            console.log(data.id, 'deleted', response);
          });
      }
    });
  }
  isFavorite(productId: string): boolean {
    const isFav = this.fav.find((product) => {
      return product.id === productId;
    });
    return !!isFav;
  }

  getFavoriteIcon(productId: string): string {
    return this.isFavorite(productId) ? 'pi pi-star-fill' : 'pi pi-star';
  }

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
      // console.log(this.products);

      this.loading = false;
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
      { field: 'availability', header: 'Наличие' },
      { field: 'country', header: 'Страна' },
      { field: 'fields', header: 'Характеристики' },
      { field: '', header: '' },
      { field: '', header: '' },
      { field: '', header: '' },
      { field: '', header: '' },
    ];
  }

  clear(table: Table) {
    table.clear();
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
