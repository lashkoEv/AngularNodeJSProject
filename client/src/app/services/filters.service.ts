import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private availabilityFilters: Set<string> = new Set();
  private fieldFilters: Map<string, Set<string>> = new Map();
  private productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productsSubject.asObservable();

  private originalProducts: IProduct[] = [];

  constructor() {}

  setProducts(products: IProduct[]) {
    this.originalProducts = products; // Store original products
    this.applyFilters(); // Apply filters on initial load
  }

  toggleAvailabilityFilter(availability: string) {
    if (this.availabilityFilters.has(availability)) {
      this.availabilityFilters.delete(availability);
    } else {
      this.availabilityFilters.add(availability);
    }
    this.applyFilters();
  }

  toggleFieldFilter(key: string, value: string) {
    if (!this.fieldFilters.has(key)) {
      this.fieldFilters.set(key, new Set());
    }
    const valuesSet = this.fieldFilters.get(key)!;
    if (valuesSet.has(value)) {
      valuesSet.delete(value);
      if (valuesSet.size === 0) {
        this.fieldFilters.delete(key);
      }
    } else {
      valuesSet.add(value);
    }
    this.applyFilters();
  }

  applyFilters() {
    let filteredProducts = this.originalProducts; // Start with the original product list

    // Filter by availability if any availability filter is selected
    if (this.availabilityFilters.size > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        this.availabilityFilters.has(product.availability.availability)
      );
    }

    // Filter by field filters if any field filters are selected
    if (this.fieldFilters.size > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return Array.from(this.fieldFilters.keys()).every((key) => {
          const productFieldValues =
            product.fields
              ?.filter((field) => field.key.trim() === key)
              .map((field) => field.value) || [];

          const selectedValues = Array.from(this.fieldFilters.get(key)!);

          // Return true if at least one value from the selected field matches
          return selectedValues.some((value) =>
            productFieldValues.includes(value)
          );
        });
      });
    }

    // Emit the filtered products
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

  getSelectedFieldFilters() {
    return this.fieldFilters; // Return the current field filters
  }
}
