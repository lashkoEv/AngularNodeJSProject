import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public phoneNumber: '+380505667571';
  public location: 'Харьков, Проспект Гагарина 1';
  public workingHours: {
    hours: '08:00 - 18:00';
    days: 'ПН-ПТ';
  };
  public title: '';
}
