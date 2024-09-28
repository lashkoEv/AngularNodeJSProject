import { Component, OnDestroy, OnInit } from '@angular/core';

import { SpinnerService } from './services/spinner.service';
import { CallUsModalWindowService } from './services/call-us-modal-window.service';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  public isVisible: boolean;
  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private translateService: TranslateService,
    public callUsModalWindow: CallUsModalWindowService,
    private primengConfig: PrimeNGConfig
  ) {
    this.callUsModalWindow
      .getIsVisible()
      .subscribe((visible) => (this.isVisible = visible));
  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('ua');
    this.primengConfig.ripple = true;

    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };

    this.primengConfig.filterMatchModeOptions = {
      text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
      ],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
      ],
      date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER,
      ],
    };

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 1000);
      }
    });

    setTimeout(() => {
      this.callUsModalWindow.toggleIsVisible();
    }, 5000);
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService
      .get('primeng')
      .subscribe((res) => this.primengConfig.setTranslation(res));
  }

  ngOnDestroy(): void {}
  selectedFile: File | null = null; // Initialize with null

  open() {
    this.callUsModalWindow.toogleIsOpen();
  }
}
