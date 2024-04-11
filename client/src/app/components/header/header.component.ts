import { AuthorizationService } from '../../services/authorization.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public phoneNumber = '+380505667571';
  public location = 'Харьков, Проспект Гагарина 1';
  public workingHours: {}[] = [{ days: 'ПН-ПТ', hours: '08:00 - 18:00' }];
  public languageSwitch: {}[] = [{ ru: 'RU', ua: 'UA' }];
  public logo = 'ИНТЕР-ПЛАСТ СЕРВИС';
  public navigation: {}[] = [
    {
      titles: ['КОНСУЛЬТАЦИЯ', 'ДОСТАВКА', 'КОНТАКТЫ'],
      links: ['consultation', 'delivery', 'contacts'],
    },
  ];

  constructor(private authorizationService: AuthorizationService) {}

  getAuthState() {
    return this.authorizationService.getAuthState();
  }

  showForm() {
    this.authorizationService.setFormState();
  }

  getFormState() {
    return this.authorizationService.getFormState();
  }

  logout() {
    this.authorizationService.setAuthState();
  }
}
