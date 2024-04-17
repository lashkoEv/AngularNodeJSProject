import { AuthorizationService } from '../../services/authorization.service';
import { Component } from '@angular/core';

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
      // titles: ['КОНСУЛЬТАЦИЯ', 'ДОСТАВКА', 'КОНТАКТЫ', 'ТОВАРЫ'],
      // links: ['consultation', 'delivery', 'contacts', 'catalogue'],
      titles: ['ДОСТАВКА', 'КОНТАКТЫ', 'ТОВАРЫ'],
      links: ['delivery', 'contacts', 'catalogue'],
    },
  ];

  constructor(private authorizationService: AuthorizationService) {}

  getAuthState() {
    return this.authorizationService.getAuthState();
  }

  getIsAdmin(){
    return this.authorizationService.getRole()
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
