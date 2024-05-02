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
      label: 'Количество',
      children: [],
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
    counts: string[];
    maxWholePrice: number;
    maxRetailPrice: number;
  };

  public wholeSaleValues: number = 0;
  public retailSaleValues: number = 0;
  public selectedFilters: any[] = [];

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
      { label: 'Цена (по убыванию)', value: '!price' },
      { label: 'Цена (по возрастанию)', value: 'price' },
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
          return product.country;
        });

        this.counts = this.products.map((product) => {
          return product.count;
        });

        this.countries = [...new Set(this.countries)];
        this.pushToData(this.countries, 'Страна');

        this.counts = [...new Set(this.counts)];
        this.pushToData(this.counts, 'Количество');
      });
    });
  }

  private setToShow() {
    const filteredProducts = this.products.filter((product) => {
      const hasCountry = this.dataForFilters.countries.includes(
        String(product.country)
      );
      const hasCount = this.dataForFilters.counts.includes(
        String(product.count)
      );
      const hasWholePrice =
        this.dataForFilters.maxWholePrice >=
        parseInt(String(product.wholesalePrice));
      const hasRetailPrice =
        this.dataForFilters.maxRetailPrice >=
        parseInt(String(product.retailPrice));

      if (hasCountry && hasCount && hasWholePrice && hasRetailPrice) {
        return true;
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
    counts: string[];
    maxWholePrice: number;
    maxRetailPrice: number;
  }) {
    this.dataForFilters = dataForFilters;

    this.setToShow();
  }

  // getShown() {
  //   return this.filtersService.getShown();
  // }

  public sendFilterData() {
    const filterData = {
      countries: [],
      counts: [],
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
    const countsData = this.getCounts();

    let countries = countriesData.filter((country) =>
      this.selectedFilters.includes(country.label)
    );
    countries.length === 0
      ? (filterData.countries = countriesData.map((country) => country.label))
      : (filterData.countries = countries.map((country) => country.label));

    let counts = countsData.filter((count) =>
      this.selectedFilters.includes(count.label)
    );
    counts.length === 0
      ? (filterData.counts = countsData.map((count) => count.label))
      : (filterData.counts = counts.map((count) => count.label));

    this.setDataForFilters(filterData);
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

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
      // this.toShow = this.toShow.sort()
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  // sortProducts(option: string) {
  //   if (option === 'A-Z') {
  //     this.products.sort((a, b) => (a.name > b.name ? 1 : -1));
  //   } else if (option === 'Z-A') {
  //     this.products.sort((a, b) => (a.name < b.name ? 1 : -1));
  //   }
  //   this.toShow = this.products.slice(0, this.pageSize);
  // }

  sortProducts(option: string) {
    console.log(this.products);
    
    switch (option) {
      case 'A-Z':
        this.products.sort((a, b) => (a.title > b.title ? 1 : -1));
        break;
      case 'Z-A':
        this.products.sort((a, b) => (a.title < b.title ? 1 : -1));
        break;
      case 'price-up':
        this.products.sort((a, b) => (a.retailPrice > b.retailPrice ? 1 : -1));
        break;
      case 'price-down':
        this.products.sort((a, b) => (a.retailPrice < b.retailPrice ? 1 : -1));
        break;
      default:
        break;
    }
    
    this.toShow = this.products.slice(0, this.pageSize);
  }
}
