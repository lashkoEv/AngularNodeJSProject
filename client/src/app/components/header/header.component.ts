import { AuthorizationService } from '../../services/authorization.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { HeaderService } from '../../services/header.service';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  sidebarVisible: boolean = false;
  isMobile: boolean = false;

  public phoneNumber = '+38 (050) 566-75-71';
  public mail = 'ipstorg@gmail.com';
  public location = 'Харьков, Проспект Гагарина 1';
  public workingHours: {}[] = [{ days: 'ПН-ПТ', hours: '08:00 - 18:00' }];
  public languageSwitch: {}[] = [{ ru: 'RU', ua: 'UA' }];
  public logo = 'ИНТЕР-ПЛАСТ СЕРВИС';
  public navigation: {}[] = [
    {
      titles: ['ТОВАРЫ', 'КОНСУЛЬТАЦИЯ'],
      links: ['catalogue', 'consultation'],
    },
  ];

  constructor(
    private authorizationService: AuthorizationService,
    private cartService: CartService,
    private translateService: TranslateService,
    private router: Router
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth <= 1000;
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 1000;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.sidebarVisible = false;
      }
    });
  }

  getAuthState() {
    return this.authorizationService.getAuthState();
  }

  getIsAdmin() {
    return this.authorizationService.getRole();
  }

  getAuth() {
    return (
      this.authorizationService.getRole() &&
      this.authorizationService.getAuthState()
    );
  }

  showForm() {
    this.authorizationService.setFormState();
  }

  getFormState() {
    return this.authorizationService.getFormState();
  }

  logout() {
    this.authorizationService.setAuthState();
    this.authorizationService.setRole(false);
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
