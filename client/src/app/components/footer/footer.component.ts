import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public socials: any[] = [
    {
      name: 'viber',
      img: '../../../assets/viber.svg',
      src: '#',
    },
    {
      name: 'telegram',
      img: '../../../assets/telegram.svg',
      src: '#',
    },
    {
      name: 'facebook',
      img: '../../../assets/facebook.svg',
      src: '#',
    },
    {
      name: 'instagram',
      img: '../../../assets/instagram.svg',
      src: '#',
    },
  ];
  public phoneNumber = '+380505667571';
  public contactEmail = 'ipstorg@gmail.com';
  public workingHours: {}[] = [{ days: 'ПН-ПТ', hours: '08:00 - 18:00' }];
  public location = 'Харьков, Проспект Гагарина 1';
  public logo = 'ИНТЕР-ПЛАСТ СЕРВИС';
  public navigation: string[] = [
    'РЕГИСТРАЦИЯ',
    'ДОСТАВКА',
    'КОНТАКТЫ',
    'ТОВАРЫ',
    'КОНСУЛЬТАЦИЯ',
  ];
}