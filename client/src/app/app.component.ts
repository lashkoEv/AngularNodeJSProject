import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    // ! Products
    // productService.getAll().forEach((data) => {
    //   console.log(data);
    // });
    // productService
    //   .getById('65edf336bc94ee73edc6c7eb')
    //   .subscribe((data) => console.log(data));
    // productService
    //   .add({
    //     title: 'Title',
    //     description: 'Description',
    //     country: 'Country',
    //     count: 10,
    //     price: 100.55,
    //     fields: 'fields',
    //     category: 'Category',
    //     imgSrc: 'src',
    //   })
    //   .subscribe((data) => console.log(data));
    // productService
    //   .deleteById('65edf336bc94ee73edc6c7eb')
    //   .subscribe((data) => console.log(data));
    // productService
    //   .update({
    //     _id: '65edfe20c4bb05a2dfdce4eb',
    //     title: 'Title2',
    //     description: '222Description',
    //     country: '22222Country',
    //     count: 10,
    //     price: 100.55,
    //     fields: '222fields',
    //     category: '2Category',
    //     imgSrc: '2222src',
    //   })
    //   .subscribe((data) => console.log(data));
    // ! Categories
    // categoryService
    //   .add({
    //     title: 'Title',
    //     description: 'Description',
    //     imgSrc: 'src',
    //   })
    //   .subscribe((data) => console.log(data));
    // categoryService.getAll().forEach((data) => {
    //   console.log(data);
    // });
    // categoryService
    //   .getById('65ee08b7a0b910db62048747')
    //   .subscribe((data) => console.log(data));
    // categoryService
    //   .deleteById('65ee08bca0b910db6204874a')
    //   .subscribe((data) => console.log(data));
    // categoryService
    //   .update({
    //     _id: '65ee08b7a0b910db62048747',
    //     title: 'Title2',
    //     description: '222Description',
    //     imgSrc: '2222src',
    //   })
    //   .subscribe((data) => console.log(data));
  }
}
