import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.scss',
})
export class ProductsCarouselComponent implements OnInit {
  /////////////////////////////////////////////////////////////////////////
  public responsiveOptions: any[] | undefined;
  public categories: any[];

  ngOnInit(): void {
    this.getCategories();

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
  }

  async getCategories() {
    await this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }
  /////////////////////////////////////////////////////////////////////////

  public slidesID: number[] = [0, 1, 2, 3, 4];

  constructor(private categoryService: CategoryService) {}

  public increaseId() {
    this.slidesID = this.slidesID.map(
      (id) => (id + 1) % this.categories.length
    );
  }

  public reduceId() {
    this.slidesID = this.slidesID.map(
      (id) => (id - 1 + this.categories.length) % this.categories.length
    );
  }
}
