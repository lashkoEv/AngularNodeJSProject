import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  public products: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });
  public responsiveOptions: any[] | undefined;
  public categories: any;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.products[0] = {
      id: 0,
      src: './../../assets/carouselImg/1.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    };
    this.products[1] = {
      id: 1,
      src: './../../assets/carouselImg/4.jpeg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };
    this.products[2] = {
      id: 2,
      src: './../../assets/carouselImg/3.jpg',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    };
    this.products[3] = {
      id: 2,
      src: './../../assets/carouselImg/2.jpg',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    };
    this.products[4] = {
      id: 2,
      src: './../../assets/carouselImg/5.webp',
      title: 'Third slide',
      subtitle:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    };

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.getCategories();
  }

  async getCategories() {
    await this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }
}
