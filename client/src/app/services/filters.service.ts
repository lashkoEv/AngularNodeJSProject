import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private availabilityFilters: Set<string> = new Set();
  private productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor() {}

  setProducts(products: IProduct[]) {
    this.productsSubject.next(products);
  }

  toggleAvailabilityFilter(availability: string) {
    if (this.availabilityFilters.has(availability)) {
      this.availabilityFilters.delete(availability);
    } else {
      this.availabilityFilters.add(availability);
    }
    this.applyFilters();
  }

  private applyFilters() {
    const products = this.productsSubject.getValue();
    const filteredProducts = products.filter((product) =>
      this.availabilityFilters.size
        ? this.availabilityFilters.has(product.availability.availability)
        : true
    );
    this.productsSubject.next(filteredProducts);
  }

  filterProductsByPriceRange(
    products: IProduct[],
    minPrice: number,
    maxPrice: number
  ): IProduct[] {
    return products.filter((product) => {
      const retailPrice = parseInt(product.retailPrice, 10);
      return retailPrice >= minPrice && retailPrice <= maxPrice;
    });
  }
}

// private allProducts: IProduct[];
// private toShow: IProduct[];
// private countries: String[];
// private counts: String[];

// public dataForFilters: {
//   countries: string[];
//   counts: string[];
//   maxWholePrice: number;
//   maxRetailPrice: number;
// };

// public data: any[] = [
//   {
//     label: 'Страна',
//     children: [],
//   },

//   {
//     label: 'Количество',
//     children: [],
//   },

//   {
//     label: 'Оптовая цена',
//   },

//   {
//     label: 'Розничная цена',
//   },
// ];

// constructor() {}

// public setProducts(products: IProduct[]) {
//   this.allProducts = products;
//   this.toShow = products;

//   // this.countries = this.allProducts.map((product) => {
//   //   return product.country.country;
//   // });

//   // this.counts = this.allProducts.map((product) => {
//   //   return product.count;
//   // });

//   this.countries = [...new Set(this.countries)];
//   this.pushToData(this.countries, 'Страна');

//   this.counts = [...new Set(this.counts)];
//   this.pushToData(this.counts, 'Количество');
// }

// private setToShow() {
//   const filtredProducts = this.allProducts.filter((product) => {
//     // const hasCountry = this.dataForFilters.countries.includes(
//     //   String(product.country.country)
//     // );
//     // const hasCount = this.dataForFilters.counts.includes(
//     //   String(product.count)
//     // );
//     const hasWholePrice =
//       this.dataForFilters.maxWholePrice >=
//       parseInt(String(product.wholesalePrice));
//     const hasRetailPrice =
//       this.dataForFilters.maxRetailPrice >=
//       parseInt(String(product.retailPrice));
//     // if(hasCountry)
//     // if (hasCount && hasWholePrice && hasRetailPrice) {
//     //   return true;
//     // }
//   });

//   this.toShow = filtredProducts;
// }

// public getShown() {
//   return this.toShow;
// }

// private pushToData(data: any, endPoint: string) {
//   let endPointIndex;

//   this.data.forEach((selector, index) => {
//     selector.label === endPoint ? (endPointIndex = index) : false;
//   });

//   if (endPointIndex || endPointIndex === 0) {
//     this.data[endPointIndex].children.length = 0;

//     data.forEach((el) => {
//       this.data[endPointIndex].children.push({ label: el });
//     });
//   }
// }

// public getMinMaxWholesalePrice(minOrMax: string) {
//   if (this.allProducts) {
//     const prices = this.allProducts.map((price) =>
//       parseInt(String(price.wholesalePrice))
//     );

//     if (minOrMax === 'min') {
//       return Math.min(...prices);
//     } else return Math.max(...prices);
//   }
// }

// public getMinMaxRetailPrice(minOrMax: string) {
//   if (this.allProducts) {
//     const prices = this.allProducts.map((price) =>
//       parseInt(String(price.retailPrice))
//     );

//     if (minOrMax === 'min') {
//       return Math.min(...prices);
//     } else return Math.max(...prices);
//   }
// }

// public getCountries() {
//   //find idx
//   return this.data[0].children;
// }

// public getCounts() {
//   //find idx
//   return this.data[1].children;
// }

// public setDataForFilters(dataForFilters: {
//   countries: string[];
//   counts: string[];
//   maxWholePrice: number;
//   maxRetailPrice: number;
// }) {
//   this.dataForFilters = dataForFilters;

//   this.setToShow();
// }
