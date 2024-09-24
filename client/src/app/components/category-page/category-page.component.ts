import * as _ from 'lodash';
import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/IProduct';
import { ICategory } from '../../interfaces/ICategory';
import { FormService } from '../../services/form.service';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss',
})
export class CategoryPageComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  sidebarVisible: boolean = false;
  layout: string = 'grid';
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;

  public category: ICategory;
  public products: IProduct[];
  public toShow: IProduct[];

  public availabilities: { availability: string }[] = [];
  public selectedAvailabilities: Set<string> = new Set();

  public fieldFilters: { key: string; values: string[] }[] = [];
  public selectedFields: Map<string, Set<string>> = new Map();

  public minPrice: number = 0;
  public maxPrice: number = 10000;
  public priceRange: number[] = [this.minPrice, this.maxPrice];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private cartService: CartService,
    private messageService: MessageService,
    private formService: FormService,
    private filtersService: FiltersService
  ) {}

  ngOnInit(): void {
    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.route.params.subscribe((params) => {
      const categoryID = params['id'];
      this.getCategory(categoryID);
    });

    this.sortOptions = [
      { label: 'Название (по возрастанию)', value: '+title' },
      { label: 'Название (по убыванию)', value: '-title' },
      { label: 'Оптовая цена (по возрастанию)', value: '+wholesalePrice' },
      { label: 'Оптовая цена (по убыванию)', value: '-wholesalePrice' },
      { label: 'Розничная цена (по возрастанию)', value: '+retailPrice' },
      { label: 'Розничная цена (по убыванию)', value: '-retailPrice' },
    ];

    this.availabilities = this.formService.getAvailability();

    this.applyFilters();
  }

  getCategory(categoryID: string) {
    this.categoryService.getById(categoryID).subscribe((data) => {
      this.category = data;

      this.items = [
        { label: 'Каталог', routerLink: '/catalogue' },
        {
          label: `${this.category.title}`,
          routerLink: ['/category', this.category._id],
        },
      ];

      this.productService.getByCategory(this.category).subscribe((data) => {
        this.products = data;
        this.toShow = data;
        this.extractFields();
      });
    });
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    this.messageService.add({
      severity: 'success',
      summary: `Продукт добавлен в корзину!`,
      detail: `Продукт ${product.title} добавлен в корзину!`,
    });
  }

  onSortChange(event: any) {
    let value = event.value;

    this.sortOrder = value[0] === '+' ? 1 : -1;
    this.sortField = value.slice(1, value.length);
  }

  toggleAvailability(availability: string) {
    if (this.selectedAvailabilities.has(availability)) {
      this.selectedAvailabilities.delete(availability);
    } else {
      this.selectedAvailabilities.add(availability);
    }
    this.filterProducts();
  }

  filterProducts() {
    if (this.selectedAvailabilities.size > 0) {
      this.toShow = this.products.filter((product) =>
        this.selectedAvailabilities.has(product.availability.availability)
      );
    } else {
      this.toShow = this.products;
    }
  }

  applyFilters(): void {
    if (this.products && this.products.length > 0) {
      let filteredProducts = this.filtersService.filterProductsByPriceRange(
        this.products,
        this.priceRange[0],
        this.priceRange[1]
      );
      this.toShow = filteredProducts;
    } else {
      this.toShow = this.products;
    }
  }

  onPriceInputChange(): void {
    this.applyFilters();
  }

  onSliderChange(event: any): void {
    this.priceRange = event.values;
    this.applyFilters();
  }

  extractFields() {
    const fieldMap: Map<string, Set<string>> = new Map();

    this.products.forEach((product) => {
      product.fields?.forEach((field) => {
        const trimmedKey = field.key.trim(); // Trim the key to remove spaces

        // Initialize a new Set for the key if it doesn't exist
        if (!fieldMap.has(trimmedKey)) {
          fieldMap.set(trimmedKey, new Set());
        }
        // Add the value to the corresponding Set (this ensures uniqueness)
        fieldMap.get(trimmedKey)!.add(field.value);
      });
    });

    // Convert the fieldMap (Map) to an array of objects for easier use in the template
    this.fieldFilters = Array.from(fieldMap).map(([key, values]) => ({
      key,
      values: Array.from(values), // Convert Set to Array for rendering
    }));

    console.log(this.fieldFilters); // Debugging - Check the final structure
  }

  toggleFieldFilter(key: string, value: string) {
    this.filtersService.toggleFieldFilter(key, value);
  }
}
