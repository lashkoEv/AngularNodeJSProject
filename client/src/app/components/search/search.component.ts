import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  myControl = new FormControl<string | IProduct>('');
  options: IProduct[] = [];
  filteredOptions: Observable<IProduct[]>;

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe((data) => {
      this.options = data;
    });
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const title = typeof value === 'string' ? value : value?.title;
        return title ? this._filter(title as string) : this.options.slice();
      })
    );
  }

  displayFn(product: IProduct): String {
    return product.title;
  }

  private _filter(title: string): IProduct[] {
    const filterValue = title.toLowerCase();

    return this.options.filter((option) =>
      option.title.toLowerCase().includes(filterValue)
    );
  }
}
