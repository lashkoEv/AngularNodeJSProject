import { AuthorizationService } from '../../services/authorization.service';
import { CategoryService } from '../../services/category.service';
import { Component, OnInit } from '@angular/core';

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
      src: 'https://web.telegram.org/k/#@InterPlastServiceBot',
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
  public categories: any;

  public phoneNumber = '+380505667571';
  public contactEmail = 'ipstorg@gmail.com';
  public workingHours: {}[] = [{ days: 'ПН-ПТ', hours: '08:00 - 18:00' }];

  public location = {
    title: 'Харьков, Проспект Гагарина 1',
    src: 'https://www.google.com/maps/place/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82+%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D1%96%D0%BD%D0%B0,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2,+%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+61000/@49.984072,36.2373798,16z/data=!4m6!3m5!1s0x41270acf708a91b3:0x2b1c4f630c1e7e80!8m2!3d49.933187!4d36.2619082!16s%2Fg%2F1213_dpz?hl=ru&entry=ttu',
  };

  public logo = 'ИНТЕР-ПЛАСТ СЕРВИС';
  public navigation: object[] = [
    {
      titles: ['РЕГИСТРАЦИЯ', 'ДОСТАВКА', 'КОНТАКТЫ', 'ТОВАРЫ'],
      links: ['#', 'delivery', 'contacts', 'catalogue'],
    },
  ];

  constructor(
    private authorizationService: AuthorizationService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  async getCategories() {
    await this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }

  getAuthState() {
    return this.authorizationService.getAuthState();
  }

  getIsAdmin() {
    return this.authorizationService.getRole();
  }

  showForm() {
    this.authorizationService.setFormState();
  }

  logout() {
    this.authorizationService.setAuthState();
    this.authorizationService.setRole(false);
  }
}
