import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { IProduct } from '../../interfaces/IProduct';
import { ICategory } from '../../interfaces/ICategory';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrl: './megamenu.component.scss',
})
export class MegamenuComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  public product: IProduct;
  public products: IProduct[];
  public category: ICategory;
  public categories: ICategory[];
  private id: string;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.id = data.id;

      this.categoryService.getById(this.id).subscribe((categoryData) => {
        this.category = categoryData;

        this.productService
          .getByCategory(this.product.category)
          .subscribe((productData) => {
            this.product = productData;

            this.items = [
              {
                label: 'Каталог',
                icon: 'pi pi-box',
                routerLink: '/catalogue',
                items: [
                  [
                    {
                      label: `${this.category.title}`,
                      routerLink: ['/category', this.product.category._id],
                      items: [
                        {
                          label: `${this.product.title}`,
                          routerLink: ['/products', this.product._id],
                        },
                      ],
                    },
                  ],
                ],
              },
            ];
          });
      });
    });
  }
}
