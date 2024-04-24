import { ProductModalWindowService } from './../../services/product-modal-window.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IProduct } from '../../interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { FormService } from '../../services/form.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  private currentProduct: IProduct | null = null;

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
    'show',
  ];

  dataSourceProduct: MatTableDataSource<IProduct>;

  constructor(
    private productService: ProductService,
    public formService: FormService,

    public notification: NotificationService,
    private productModalWindowService: ProductModalWindowService
  ) {
    // for (let i = 0; i < 10; i++) {
    // productService
    //   .add({
    //     title: 'Title',
    //     description: 'Description',
    //     country: 'Country',
    //     wholesalePrice: '100 грн',
    //     retailPrice: '200 грн',
    //     count: '10 шт.',
    //     fields: [{ key: 'field', value: 'value' }].toString(),
    //     category: 'Category',
    //     imgSrc:
    //       'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
    //   })
    //   .subscribe((d) => {
    //     console.log(d);
    //   });
    // }
  }

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.dataSourceProduct = new MatTableDataSource<IProduct>(data);
      this.dataSourceProduct.paginator = this.paginator;
      this.dataSourceProduct.paginator._intl.itemsPerPageLabel =
        'Продуктов на странице: ';
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

  updateProduct(product: IProduct) {
    this.formService.setProductId(product._id as string);
    this.getProduct(product);
    this.formService.invokeEditForm();
    this.ngOnInit();
  }

  showProduct(data: IProduct) {
    this.currentProduct = data;
    console.log(this.currentProduct);
    this.productModalWindowService.changeFormState();
  }

  getFormState() {
    return this.productModalWindowService.getFormState();
  }

  getShownProduct() {
    return this.currentProduct;
  }
}
