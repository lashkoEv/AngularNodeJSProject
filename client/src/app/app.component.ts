import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private productService: ProductService) {
    productService.getAll().forEach((data) => {
      console.log(data);
    });

    productService
      .getById('65edf336bc94ee73edc6c7eb')
      .subscribe((data) => console.log(data));

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

    productService
      .deleteById('65edf336bc94ee73edc6c7eb')
      .subscribe((data) => console.log(data));

    productService
      .update({
        _id: '65edfe20c4bb05a2dfdce4eb',
        title: 'Title2',
        description: '222Description',
        country: '22222Country',
        count: 10,
        price: 100.55,
        fields: '222fields',
        category: '2Category',
        imgSrc: '2222src',
      })
      .subscribe((data) => console.log(data));
  }
}
