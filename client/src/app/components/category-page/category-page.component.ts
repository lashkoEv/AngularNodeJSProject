import * as _ from'lodash';
import isEqual from'lodash/isEqual';
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
      label: 'Наличие',
      children: [{label: "Есть в наличии"}, {label: "Нет в наличии"}]
    },
    {
      label: 'Количество',
    },

    {
      label: 'Розничная цена',
    },
  ];

  public dataForFilters: {
    count: number;
    available: boolean | null;
    minRetailPrice: number;
    maxRetailPrice: number;
    productFields: object[];
  };

  public retailSaleValueFrom: number;
  public retailSaleValueTo: number;
  public selectedFilters: any[] = [];
  public count: number = 0;
  public additionalInfo: any[] = [];

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
        
        this.counts = this.products.map((product) => {
          return product.count;
        });

        // this.countries = [...new Set(this.countries)];
        // this.pushToData(this.countries, 'Страна');

        this.counts = [...new Set(this.counts)];

        const prices = this.products.map((price) =>
          parseInt(String(price.retailPrice))
        );      
  
        this.retailSaleValueFrom = Math.min(...prices);
        this.retailSaleValueTo = Math.max(...prices);

        this.addAdditionalInfo(this.products)
        console.log("this.additionalInfo", this.additionalInfo);
        
        this.additionalInfo.map((el: any) => {
          const productField = {
            label: el.key,
            children: [{label: el.value}]
          };



          // console.log(productField);

          // let duplicates = this.hasDuplicates(this.additionalInfo, productField);
          // console.log('duplicates', duplicates);

          // if(!this.hasDuplicates(this.data, productField)){
            //   this.data.push(productField);
            // }
            
            // data.children.push(...productField.children)
            
          for(let data of this.data){
            console.log("data", data.children);
            if (data.label !== productField.label) {
              // console.log("data.label", data.label);
              // console.log("productField.label", productField.label);
              // console.log("huy");
              
              return this.data.push(productField);
            } else if(!data.children.includes(productField.children[0])){
              // console.log('pizda');
              
              data.children.push(productField.children[0])
            }

          }

          console.log('end');
        })

        console.log("this.data", this.data);
      });
    });
  }

  private hasDuplicates(arr: any[], el) {
    for (let item of arr) {
      if (item.label === el.label) {
        return true;
      }
    }
    
    return false;
  }

  private addAdditionalInfo(products: IProduct[]){
    let allAdtl = []
    let adtlNoDuplicates = []

    for(let product of products){
      if(product.fields.length > 0){
        allAdtl.push(...product.fields);
      }
    }

    allAdtl = allAdtl.map((el, i) => {
      for (let j = i + 1; j < allAdtl.length; j++) {
        if (isEqual(allAdtl[i], allAdtl[j])) {
          console.log(el);
          
          return allAdtl.slice(0, i).concat(allAdtl.slice(i + 1));
        }
      }
      adtlNoDuplicates.push(allAdtl[i]);
    })

    this.additionalInfo = adtlNoDuplicates;

    const additionalProducts = this.additionalInfo.map((el) => {
      for(const adtl of this.additionalInfo){
        if(adtl.key !== el.key){
          return true
        } else if (adtl.value){}
      }   
    })

  }

  private isAdditionalInfoInProduct(){
    const productsFields = this.products.filter((product) => {
      for(let field of product.fields){
        for(let addtl of this.dataForFilters.productFields){
          if(field.value === addtl['value']){
            return true
          }
        }
      }
    })


    // const productsAvailibility = this.products.filter((product) => {
    //   switch (this.dataForFilters.available) {
    //     case true:
    //       return product.availability.availability === 'Есть в наличии' ? true : false;

    //     case false:
    //       return product.availability.availability === 'Нет в наличии' ? true : false;

    //     case null:
    //       return true;
    //   }
    // })

    return productsFields;
  }

  private setToShow() {
    const filteredProducts = this.products.filter((product) => {
      
      const hasCount =
        this.dataForFilters.count >= parseInt(String(product.count));

      const hasRetailPrice =
        this.dataForFilters.minRetailPrice <= +product.retailPrice &&
        this.dataForFilters.maxRetailPrice >= +product.retailPrice
      
      if (hasCount && hasRetailPrice) {
        // if(this.dataForFilters.productFields.length > 0){
        //   for(let el of this.dataForFilters.productFields){
        //     for(let productField of product.fields){
        //       const selectedFieldValue = el['value'];
        //       const productFieldValue = productField['value'];
              
        //       if(selectedFieldValue === productFieldValue){
        //         console.log('selectedFieldValue', selectedFieldValue);
                
        //         console.log('productFieldValue', productFieldValue);
                
        //         return true
        //       }
        //     }
        //   }
        // }

        const productsWhithAdtl = this.isAdditionalInfoInProduct();
        
        // console.log("product", productsWhithAdtl);
        for(let productWhithAdtl of productsWhithAdtl){
          // product._id === productWhithAdtl['_id']
          
          if(product._id === productWhithAdtl['_id']){
            console.log("productWhithAdtl", productWhithAdtl);
            
            return true;
          }
        }

        switch (this.dataForFilters.available) {
          case true:
            return product.availability.availability === 'Есть в наличии' ? true : false;

          case false:
            return product.availability.availability === 'Нет в наличии' ? true : false;

          case null:
            return true;
        }
      }
    });

    this.toShow = filteredProducts;
    console.log("this.toShow", this.toShow);
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

  public getMinMaxRetailPrice(minOrMax: string) {
    if (this.products) {
      const prices = this.products.map((price) =>
        parseInt(String(price.retailPrice))
      );

      if (minOrMax === 'min') {
        return Math.min(...prices);
      } else {
        return Math.max(...prices);
      }
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
    count: number;
    available: boolean | null;
    minRetailPrice: number;
    maxRetailPrice: number;
    productFields: object[];
  }) {
    this.dataForFilters = dataForFilters;
    console.log("this.dataForFilters", this.dataForFilters);
    
    this.setToShow();
  }

  public sendFilterData() {
    const filterData = {
      count: this.count === 0 ? this.getMinMaxCount('max') : this.count,
      available: null,
      minRetailPrice: this.retailSaleValueFrom <= this.getMinMaxRetailPrice('min')
      ? this.getMinMaxRetailPrice('min')
      : +this.retailSaleValueFrom,
      maxRetailPrice:
        this.retailSaleValueTo >= this.getMinMaxRetailPrice('max')
          ? this.getMinMaxRetailPrice('max')
          : +this.retailSaleValueTo,
      productFields: []
    };

    if(isNaN(filterData.minRetailPrice) || filterData.minRetailPrice === this.getMinMaxRetailPrice('min')){
      filterData.minRetailPrice = this.getMinMaxRetailPrice('min');
      this.retailSaleValueFrom = filterData.minRetailPrice;
    }

    if(isNaN(filterData.maxRetailPrice) || filterData.maxRetailPrice === 0){
      filterData.maxRetailPrice = this.getMinMaxRetailPrice('max');
      this.retailSaleValueTo = filterData.maxRetailPrice;
    }

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

    this.additionalInfo.filter((el: any) => {
      for(let selectedFilter of this.selectedFilters){
        if(el.value === selectedFilter){
          filterData.productFields.push(el);
        }
      }
    })
    
    this.setDataForFilters(filterData);
  }

  public resetFilters() {
    this.retailSaleValueFrom = this.getMinMaxRetailPrice('min');
    this.retailSaleValueTo = this.getMinMaxRetailPrice('max');
    this.count = 0;
    this.selectedFilters = [];

    // const countriesData = this.getCountries().map((country) => country.label);

    this.setDataForFilters({
      count: this.getMinMaxCount('max'),
      available: null,
      minRetailPrice: this.getMinMaxRetailPrice('min'),
      maxRetailPrice: this.getMinMaxRetailPrice('max'),
      productFields: []
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
}
