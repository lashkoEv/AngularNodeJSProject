import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { IProduct } from '../../interfaces/IProduct';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
<<<<<<< HEAD
export class MainComponent {
  public mainImgSrc:any = '../../../assets/images/02Screenshot_29-upscaled-standard-scale-6_00x.png'
  // public aboutUsText: string = 'Основная деятельность нашей компании - это реализация резинотехнических и асботехнических изделий со склада в Харькове и под заказ, а именно: асбестовый шнур (асбошнур ШАОН) диаметром от 2 до 32 мм, асбестовый картон или асбест (асбокартон КАОН), асбестовые ткани (асботкань АТ-2, АТ-3, АТ-4), асбестовая лента (асболента ЛАЭ), асбестовая набивка (марк АП-31, АПР-31, АГИ, АФТ, АС), набивка сальниковая ХБП-31, ЛП, асбостальной лист ЛА-1. стрічка гальмівна ЛАТ-2 40*6 і 45*8, пароніт ПОН-б і ПМБ, азбестова папери (асбобумага БТ і БЕ), техпластина ТМКЩ і МБС, гума сира або гумова суміш для вулканізації, ремонту транспортерних стрічок, маслобензостійкі, електроізоляційні, харчові, для виготовлення манжетів і сальників, а так само пластина пориста або губчаста, канат пеньковий, смоляний (каболка) 12-50 мм, рукав гумовий напірні, напірно-всмоктуючий, всмоктуючий, водяний , бензиновий, кисневий, паровий, газовий, шланги, склотканини і тканини безазбестові.';
  
  public aboutUsText: string = 'Основная деятельность нашей компании - это реализация резинотехнических и асботехнических изделий со склада в Харькове и под заказ, а именно:';
  public aboutUsTextGroup1: string = 'Aсбестовый шнур (асбошнур ШАОН) диаметром от 2 до 32 мм, асбестовый картон или асбест (асбокартон КАОН), асбестовые ткани (асботкань АТ-2, АТ-3, АТ-4), асбестовая лента (асболента ЛАЭ), асбестовая набивка (марк АП-31, АПР-31, АГИ, АФТ, АС), набивка сальниковая ХБП-31, ЛП, асбостальной лист ЛА-1.';
  public aboutUsTextGroup2: string = 'Cтрічка гальмівна ЛАТ-2 40*6 і 45*8, пароніт ПОН-б і ПМБ, азбестова папери (асбобумага БТ і БЕ), техпластина ТМКЩ і МБС. Гума сира або гумова суміш для вулканізації, ремонту транспортерних стрічок, маслобензостійкі, електроізоляційні, харчові, для виготовлення манжетів і сальників.';
  public aboutUsTextGroup3: string = 'A так само пластина пориста або губчаста, канат пеньковий, смоляний (каболка) 12-50 мм, рукав гумовий напірні, напірно-всмоктуючий, всмоктуючий, водяний , бензиновий, кисневий, паровий, газовий, шланги, склотканини і тканини безазбестові.';

  public aboutUsTextGroups = [
    {
      txt: this.aboutUsTextGroup1
    },
    {
      txt: this.aboutUsTextGroup2
    },
    {
      txt: this.aboutUsTextGroup3
    }
  ];
=======
export class MainComponent implements OnInit {
  public categories: any;
  public products: Observable<IProduct[]>;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }
  async getCategories() {
    await this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });
  }

  async getProducts() {
    this.products = this.productService.getAll();
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    console.log(product);
    this.messageService.add({
      severity: 'success',
      summary: `Продукт добавлен в корзину!`,
      detail: `Продукт ${product.title} добавлен в корзину!`,
    });
  }
>>>>>>> master
}
