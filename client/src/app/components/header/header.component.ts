import { AuthorizationService } from '../../services/authorization.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { HeaderService } from '../../services/header.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  sidebarVisible: boolean = false;
  public phoneNumber = '0505667571';
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
    private router: Router
  ) {}
  ngOnInit(): void {
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
}
