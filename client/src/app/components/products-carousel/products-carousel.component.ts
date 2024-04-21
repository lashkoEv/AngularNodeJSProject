import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.scss'
})
export class ProductsCarouselComponent implements OnInit{

  /////////////////////////////////////////////////////////////////////////
  public responsiveOptions: any[] | undefined;
  public categories: any[];

  ngOnInit(): void {
    this.getCategories();    

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  async getCategories() {
    await this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }
  /////////////////////////////////////////////////////////////////////////

  // public slides: any[] = [
  //   {
  //     id: 0,
  //     src: './../../assets/productsImg/abestosProductsATI.webp',
  //     title: 'АЗБЕСТОВІ ВИРОБИ АТІ',
  //     subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  //     link: ''
  //   },

  //   {
  //     id: 1,
  //     src: './../../assets/productsImg/asbestosClothAT.webp',
  //     title: 'ТКАНИНА АЗБЕСТОВА АТ (АСБОТКАНЬ)',
  //     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     link: ''
  //   },
  //   {
  //     id: 2,
  //     src: './../../assets/productsImg/asbestosCordShaun.webp',
  //     title: 'АЗБЕСТОВИЙ ШНУР ШАОН ГОСТ 1779-83',
  //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  //     link: ''
  //   },
  //   {
  //     id: 3,
  //     src: './../../assets/productsImg/asbestosElectricalInsulatingTapeLAE.webp',
  //     title: 'СТРІЧКА АЗБЕСТОВА ЕЛЕКТРОІЗОЛЯЦІЙНА ЛАЭ',
  //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  //     link: ''
  //   },
  //   {
  //     id: 4,
  //     src: './../../assets/productsImg/brakeBeltLat2.webp',
  //     title: 'СТРІЧКА ГАЛЬМІВНА ЛАТ-2, ЕМ-1, ЕМ-2(К)',
  //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  //     link: ''
  //   },
  //   {
  //     id: 5,
  //     src: './../../assets/productsImg/fireResistantFabrics.webp',
  //     title: 'ВОГНЕТРИВКІ ТКАНИНИ',
  //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  //     link: ''
  //   },
  //   {
  //     id: 6,
  //     src: './../../assets/productsImg/paronitPonB.webp',
  //     title: 'ПАРОНІТ ПОН-Б, ПМБ',
  //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  //     link: ''
  //   },
  //   {
  //     id: 7,
  //     src: './../../assets/productsImg/purchaseSalnikov.webp',
  //     title: 'НАБИВКА САЛЬНИКОВА',
  //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  //     link: ''
  //   },
  //   {
  //     id: 8,
  //     src: './../../assets/productsImg/rawRubber.webp',
  //     title: 'СИРА ГУМА (ГУМОВА СУМІШ)',
  //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  //     link: ''
  //   },
  //   {
  //     id: 9,
  //     src: './../../assets/productsImg/rubberEngineeringProductsGTV.webp',
  //     title: 'РЕЗИНОТЕХНИЧНЫЕ ВИРОБИ ГТВ',
  //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  //     link: ''
  //   }
  // ]

  public slidesID: number[] = [0, 1, 2, 3, 4];

  constructor(private categoryService: CategoryService) {}

  public increaseId() {
    this.slidesID = this.slidesID.map(id => (id + 1) % this.categories.length);
  }
  
  public reduceId() {
    this.slidesID = this.slidesID.map(id => (id - 1 + this.categories.length) % this.categories.length);
  }

}
