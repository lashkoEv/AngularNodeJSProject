import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MenuItem } from 'primeng/api';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss',
})
export class CatalogueComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  public selectedLang: string;

  public categories: any;
  constructor(
    private categoryService: CategoryService,
    private traslationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.traslationService.getLanguage().subscribe((data) => {
      this.selectedLang = data;
    });
    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.items = [{ label: 'Каталог', routerLink: '/catalogue' }];

    this.getCategories();
  }

  async getCategories() {
    await this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }

  getUrl(url: string) {
    return `url('${url}')`;
  }
}
