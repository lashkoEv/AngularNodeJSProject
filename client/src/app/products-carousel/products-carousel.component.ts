import { Component } from '@angular/core';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.scss'
})
export class ProductsCarouselComponent {
  public slides: any[] = [
    {
      id: 0,
      src: './../../assets/productsImg/abestosProductsATI.webp',
      title: 'АЗБЕСТОВІ ВИРОБИ АТІ',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },

    {
      id: 1,
      src: './../../assets/productsImg/asbestosClothAT.webp',
      title: 'ТКАНИНА АЗБЕСТОВА АТ (АСБОТКАНЬ)',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      src: './../../assets/productsImg/asbestosCordShaun.webp',
      title: 'АЗБЕСТОВИЙ ШНУР ШАОН ГОСТ 1779-83',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      id: 3,
      src: './../../assets/productsImg/asbestosElectricalInsulatingTapeLAE.webp',
      title: 'СТРІЧКА АЗБЕСТОВА ЕЛЕКТРОІЗОЛЯЦІЙНА ЛАЭ',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      id: 4,
      src: './../../assets/productsImg/brakeBeltLat2.webp',
      title: 'СТРІЧКА ГАЛЬМІВНА ЛАТ-2, ЕМ-1, ЕМ-2(К)',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      id: 5,
      src: './../../assets/productsImg/fireResistantFabrics.webp',
      title: 'ВОГНЕТРИВКІ ТКАНИНИ',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      id: 6,
      src: './../../assets/productsImg/paronitPonB.webp',
      title: 'ПАРОНІТ ПОН-Б, ПМБ',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      id: 7,
      src: './../../assets/productsImg/purchaseSalnikov.webp',
      title: 'НАБИВКА САЛЬНИКОВА',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      id: 8,
      src: './../../assets/productsImg/rawRubber.webp',
      title: 'СИРА ГУМА (ГУМОВА СУМІШ)',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    },
    {
      id: 9,
      src: './../../assets/productsImg/rubberEngineeringProductsGTV.webp',
      title: 'РЕЗИНОТЕХНИЧНЫЕ ВИРОБИ ГТВ',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ]

  public slidesID: number[] = [0, 1, 2, 3, 4];

  constructor(){}

  public increaseId(){
    const newslidesID = this.slidesID.map((id) => {
      if(id === 9){
        id = 0
      } else id ++ ;

      return id;
    })
    
    this.slidesID = newslidesID;    
  }

  public reduceId(){
    const newslidesID = this.slidesID.map((id) => {
      if(id === 0){
        id = 9
      } else id --;

      return id;
    })
    
    this.slidesID = newslidesID;    
  }
}
