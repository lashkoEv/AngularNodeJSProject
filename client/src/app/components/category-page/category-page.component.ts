import { MenuItem, MessageService, SelectItem } from 'primeng/api';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/IProduct';
import { FiltersService } from '../../services/filters.service';
import { ICategory } from '../../interfaces/ICategory';

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
  private countries: String[];
  private counts: String[];

  public data: any[] = [
    {
      label: 'Страна',
      children: [],
    },

    {
      label: 'Наличие',
      children: [{ label: 'Есть в наличии' }, { label: 'Нет в наличии' }],
    },

    {
      label: 'Количество',
    },

    {
      label: 'Оптовая цена',
    },

    {
      label: 'Розничная цена',
    },
  ];

  public dataForFilters: {
    countries: string[];
    count: number;
    available: boolean | null;
    maxWholePrice: number;
    maxRetailPrice: number;
  };

  public wholeSaleValues: number = 0;
  public retailSaleValues: number = 0;
  public selectedFilters: any[] = [];
  public count: number = 0;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private filtersService: FiltersService,
    private cartService: CartService,
    private messageService: MessageService
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
      { label: 'Количество (по возрастанию)', value: '+count' },
      { label: 'Количество (по убыванию)', value: '-count' },
    ];
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
        this.filtersService.setProducts(data);
        this.products = data;
        this.toShow = data;

        this.countries = this.products.map((product) => {
          return product.country.country;
        });

        this.counts = this.products.map((product) => {
          return product.count;
        });

        this.countries = [...new Set(this.countries)];
        this.pushToData(this.countries, 'Страна');

        this.counts = [...new Set(this.counts)];

        // this.pushToData(this.counts, 'Количество');
      });
    });
  }

  private setToShow() {
    const filteredProducts = this.products.filter((product) => {
      const hasCountry = this.dataForFilters.countries.includes(
        String(product.country.country)
      );

      const hasCount =
        this.dataForFilters.count >= parseInt(String(product.count));

      const hasWholePrice =
        this.dataForFilters.maxWholePrice >=
        parseInt(String(product.wholesalePrice));

      const hasRetailPrice =
        this.dataForFilters.maxRetailPrice >=
        parseInt(String(product.retailPrice));

      if (hasCountry && hasCount && hasWholePrice && hasRetailPrice) {
        switch (this.dataForFilters.available) {
          case true:
            return +product.count > 0 ? true : false;

          case false:
            return +product.count < 1 ? true : false;

          case null:
            return true;
        }

        // return true;
      }
    });

    this.toShow = filteredProducts;
  }

  private pushToData(data: any, endPoint: string) {
    let endPointIndex;

    this.data.forEach((selector, index) => {
      selector.label === endPoint ? (endPointIndex = index) : false;
    });

    if (endPointIndex || endPointIndex === 0) {
      this.data[endPointIndex].children.length = 0;

      data.forEach((el) => {
        this.data[endPointIndex].children.push({ label: el });
      });
    }
  }

  public getMinMaxWholesalePrice(minOrMax: string) {
    if (this.products) {
      const prices = this.products.map((price) =>
        parseInt(String(price.wholesalePrice))
      );

      if (minOrMax === 'min') {
        return Math.min(...prices);
      } else return Math.max(...prices);
    }
  }

  public getMinMaxRetailPrice(minOrMax: string) {
    if (this.products) {
      const prices = this.products.map((price) =>
        parseInt(String(price.retailPrice))
      );

      if (minOrMax === 'min') {
        return Math.min(...prices);
      } else return Math.max(...prices);
    }
  }

  public getMinMaxCount(minOrMax: string) {
    if (this.products) {
      const counts = this.products.map((product) =>
        parseInt(String(product.count))
      );

      if (minOrMax === 'min') {
        return Math.min(...counts);
      } else return Math.max(...counts);
    }
  }

  public getCountries() {
    //find idx
    return this.data[0].children;
  }

  public getCounts() {
    //find idx
    return this.data[1].children;
  }

  public setDataForFilters(dataForFilters: {
    countries: string[];
    count: number;
    available: boolean | null;
    maxWholePrice: number;
    maxRetailPrice: number;
  }) {
    this.dataForFilters = dataForFilters;

    this.setToShow();
  }

  public sendFilterData() {
    const filterData = {
      countries: [],
      count: this.count === 0 ? this.getMinMaxCount('max') : this.count,
      available: null,
      maxWholePrice:
        this.wholeSaleValues === 0
          ? this.getMinMaxWholesalePrice('max')
          : this.wholeSaleValues,
      maxRetailPrice:
        this.retailSaleValues === 0
          ? this.getMinMaxRetailPrice('max')
          : this.retailSaleValues,
    };

    const countriesData = this.getCountries();

    let countries = countriesData.filter((country) =>
      this.selectedFilters.includes(country.label)
    );

    countries.length === 0
      ? (filterData.countries = countriesData.map((country) => country.label))
      : (filterData.countries = countries.map((country) => country.label));

    if (
      this.selectedFilters.includes('Есть в наличии') &&
      this.selectedFilters.includes('Нет в наличии')
    ) {
      filterData.available = null;
    } else if (this.selectedFilters.includes('Нет в наличии')) {
      filterData.available = false;
    } else if (this.selectedFilters.includes('Есть в наличии')) {
      filterData.available = true;
    }

    // let counts = countsData.filter((count) =>
    //   this.selectedFilters.includes(count.label)
    // );

    // counts.length === 0
    //   ? (filterData.counts = countsData.map((count) => count.label))
    //   : (filterData.counts = counts.map((count) => count.label));

    this.setDataForFilters(filterData);
  }

  public resetFilters() {
    this.wholeSaleValues = 0;
    this.retailSaleValues = 0;
    this.count = 0;
    this.selectedFilters = [];

    // this.sendFilterData();
    const countriesData = this.getCountries().map((country) => country.label);

    this.setDataForFilters({
      countries: countriesData,
      count: this.getMinMaxCount('max'),
      available: null,
      maxWholePrice: this.getMinMaxWholesalePrice('max'),
      maxRetailPrice: this.getMinMaxRetailPrice('max'),
    });

    // this.selectedFilters = [];
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    console.log(product);
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
}
