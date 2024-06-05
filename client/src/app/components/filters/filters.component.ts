import { Component } from '@angular/core';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})

export class FiltersComponent{
  public sidebarVisible: boolean = false;
  public wholeSaleValues: number = 0;
  public retailSaleValues: number = 0;
  public selectedFilters: any[] = [];

  // private maxWholePrice: number = this.filtersService.getMinMaxWholesalePrice('max');
  // private maxRetailPrice: number = this.filtersService.getMinMaxRetailPrice('max');

  constructor(
    public filtersService: FiltersService
  ){}

  public sendFilterData(){
    const filterData = {
      countries: [],
      counts: [],
      maxWholePrice: this.wholeSaleValues === 0 ? this.filtersService.getMinMaxWholesalePrice('max') : this.wholeSaleValues,
      maxRetailPrice: this.retailSaleValues === 0 ? this.filtersService.getMinMaxRetailPrice('max') : this.retailSaleValues
    }

    const countriesData = this.filtersService.getCountries();
    const countsData = this.filtersService.getCounts();

    let countries = countriesData.filter(country => this.selectedFilters.includes(country.label));
    countries.length === 0 ? filterData.countries = countriesData.map(country => country.label) : filterData.countries = countries.map(country => country.label);
    
    let counts = countsData.filter(count => this.selectedFilters.includes(count.label));
    counts.length === 0 ? filterData.counts = countsData.map(count => count.label) : filterData.counts = counts.map(count => count.label);
    
    this.filtersService.setDataForFilters(filterData);
  }
}
