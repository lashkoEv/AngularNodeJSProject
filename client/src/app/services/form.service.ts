import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private isEditProduct: boolean = false;
  private isAddProduct: boolean = false;
  private isAddCategory: boolean = false;
  private isUpdateCategory: boolean = false;
  private formTitle: string = '';
  private productId: string = '';
  private categoryId: string = '';

  private countries: { country: string }[] = [
    { country: 'Афганистан' },
    { country: 'Албания' },
    { country: 'Антарктика' },
    { country: 'Алжир' },
    { country: 'Американское Самоа' },
    { country: 'Андорра' },
    { country: 'Ангола' },
    { country: 'Антигуа и Барбуда' },
    { country: 'Азербайджан' },
    { country: 'Аргентина' },
    { country: 'Австралия' },
    { country: 'Австрия' },
    { country: 'Багамские Острова' },
    { country: 'Бахрейн' },
    { country: 'Бангладеш' },
    { country: 'Армения' },
    { country: 'Барбадос' },
    { country: 'Бельгия' },
    { country: 'Бермудские Острова' },
    { country: 'Бутан' },
    { country: 'Боливия' },
    { country: 'Босния и Герцеговина' },
    { country: 'Ботсвана' },
    { country: 'Остров Буве' },
    { country: 'Бразилия' },
    { country: 'Белиз' },
    { country: 'Британская территория в Индийском океане' },
    { country: 'Соломоновы Острова' },
    { country: 'Британские Виргинские острова' },
    { country: 'Бруней' },
    { country: 'Болгария' },
    { country: 'Мьянма' },
    { country: 'Бурунди' },
    { country: 'Белоруссия' },
    { country: 'Камбоджа' },
    { country: 'Камерун' },
    { country: 'Канада' },
    { country: 'Кабо-Верде' },
    { country: 'Каймановы острова' },
    { country: 'Центральноафриканская Республика' },
    { country: 'Шри-Ланка' },
    { country: 'Чад' },
    { country: 'Чили' },
    { country: 'Китайская Народная Республика' },
    { country: 'Остров Рождества' },
    { country: 'Кокосовые острова' },
    { country: 'Колумбия' },
    { country: 'Коморы' },
    { country: 'Майотта' },
    { country: 'Республика Конго' },
    { country: 'Демократическая Республика Конго' },
    { country: 'Острова Кука' },
    { country: 'Коста-Рика' },
    { country: 'Хорватия' },
    { country: 'Куба' },
    { country: 'Кипр' },
    { country: 'Чехия' },
    { country: 'Бенин' },
    { country: 'Дания' },
    { country: 'Доминика' },
    { country: 'Доминиканская Республика' },
    { country: 'Эквадор' },
    { country: 'Сальвадор' },
    { country: 'Экваториальная Гвинея' },
    { country: 'Эфиопия' },
    { country: 'Эритрея' },
    { country: 'Эстония' },
    { country: 'Фарерские острова' },
    { country: 'Фолклендские острова' },
    { country: 'Южная Георгия и Южные Сандвичевы острова' },
    { country: 'Фиджи' },
    { country: 'Финляндия' },
    { country: 'Аландские острова' },
    { country: 'Франция' },
    { country: 'Французская Гвиана' },
    { country: 'Французская Полинезия' },
    { country: 'Французские Южные и Антарктические территории' },
    { country: 'Джибути' },
    { country: 'Габон' },
    { country: 'Грузия' },
    { country: 'Гамбия' },
    { country: 'Палестина' },
    { country: 'Германия' },
    { country: 'Гана' },
    { country: 'Гибралтар' },
    { country: 'Кирибати' },
    { country: 'Греция' },
    { country: 'Гренландия' },
    { country: 'Гренада' },
    { country: 'Гваделупа' },
    { country: 'Гуам' },
    { country: 'Гватемала' },
    { country: 'Гвинея' },
    { country: 'Гайана' },
    { country: 'Республика Гаити' },
    { country: 'Остров Херд и острова Макдональд' },
    { country: 'Ватикан' },
    { country: 'Гондурас' },
    { country: 'Гонконг' },
    { country: 'Венгрия' },
    { country: 'Исландия' },
    { country: 'Индия' },
    { country: 'Индонезия' },
    { country: 'Иран' },
    { country: 'Ирак' },
    { country: 'Ирландия' },
    { country: 'Израиль' },
    { country: 'Италия' },
    { country: 'Кот-д’Ивуар' },
    { country: 'Ямайка' },
    { country: 'Япония' },
    { country: 'Казахстан' },
    { country: 'Иордания' },
    { country: 'Кения' },
    { country: 'КНДР' },
    { country: 'Республика Корея' },
    { country: 'Кувейт' },
    { country: 'Киргизия' },
    { country: 'Лаос' },
    { country: 'Ливан' },
    { country: 'Лесото' },
    { country: 'Латвия' },
    { country: 'Либерия' },
    { country: 'Ливия' },
    { country: 'Лихтенштейн' },
    { country: 'Литва' },
    { country: 'Люксембург' },
    { country: 'Макао' },
    { country: 'Мадагаскар' },
    { country: 'Малави' },
    { country: 'Малайзия' },
    { country: 'Мальдивы' },
    { country: 'Мали' },
    { country: 'Мальта' },
    { country: 'Мартиника' },
    { country: 'Мавритания' },
    { country: 'Маврикий' },
    { country: 'Мексика' },
    { country: 'Монако' },
    { country: 'Монголия' },
    { country: 'Молдавия' },
    { country: 'Черногория' },
    { country: 'Монтсеррат' },
    { country: 'Марокко' },
    { country: 'Мозамбик' },
    { country: 'Оман' },
    { country: 'Намибия' },
    { country: 'Науру' },
    { country: 'Непал' },
    { country: 'Нидерланды' },
    { country: 'Кюрасао' },
    { country: 'Аруба' },
    { country: 'Синт-Мартен' },
    { country: 'Бонэйр, Синт-Эстатиус и Саба' },
    { country: 'Новая Каледония' },
    { country: 'Вануату' },
    { country: 'Новая Зеландия' },
    { country: 'Никарагуа' },
    { country: 'Нигер' },
    { country: 'Нигерия' },
    { country: 'Ниуэ' },
    { country: 'Норфолк' },
    { country: 'Норвегия' },
    { country: 'Северные Марианские острова' },
    { country: 'Внешние малые острова США' },
    { country: 'Микронезия' },
    { country: 'Маршалловы Острова' },
    { country: 'Палау' },
    { country: 'Пакистан' },
    { country: 'Панама' },
    { country: 'Папуа — Новая Гвинея' },
    { country: 'Парагвай' },
    { country: 'Перу' },
    { country: 'Филиппины' },
    { country: 'Острова Питкэрн' },
    { country: 'Польша' },
    { country: 'Португалия' },
    { country: 'Гвинея-Бисау' },
    { country: 'Восточный Тимор' },
    { country: 'Пуэрто-Рико' },
    { country: 'Катар' },
    { country: 'Реюньон' },
    { country: 'Румыния' },
    { country: 'Россия' },
    { country: 'Руанда' },
    { country: 'Сен-Бартелеми' },
    { country: 'Острова Святой Елены, Вознесения и Тристан-да-Кунья' },
    { country: 'Сент-Китс и Невис' },
    { country: 'Ангилья' },
    { country: 'Сент-Люсия' },
    { country: 'Сен-Мартен (Франция)' },
    { country: 'Сен-Пьер и Микелон' },
    { country: 'Сент-Винсент и Гренадины' },
    { country: 'Сан-Марино' },
    { country: 'Сан-Томе и Принсипи' },
    { country: 'Саудовская Аравия' },
    { country: 'Сенегал' },
    { country: 'Сербия' },
    { country: 'Сейшельские Острова' },
    { country: 'Сьерра-Леоне' },
    { country: 'Сингапур' },
    { country: 'Словакия' },
    { country: 'Словения' },
    { country: 'Сомали' },
    { country: 'Южно-Африканская Республика' },
    { country: 'Зимбабве' },
    { country: 'Испания' },
    { country: 'Южный Судан' },
    { country: 'Судан' },
    { country: 'Западная Сахара' },
    { country: 'Суринам' },
    { country: 'Шпицберген и Ян-Майен' },
    { country: 'Свазиленд' },
    { country: 'Швеция' },
    { country: 'Швейцария' },
    { country: 'Сирия' },
    { country: 'Таджикистан' },
    { country: 'Таиланд' },
    { country: 'Того' },
    { country: 'Токелау' },
    { country: 'Тонга' },
    { country: 'Тринидад и Тобаго' },
    { country: 'Объединённые Арабские Эмираты' },
    { country: 'Тунис' },
    { country: 'Турция' },
    { country: 'Туркмения' },
    { country: 'Теркс и Кайкос' },
    { country: 'Тувалу' },
    { country: 'Уганда' },
    { country: 'Украина' },
    { country: 'Республика Македония' },
    { country: 'Египет' },
    { country: 'Великобритания' },
    { country: 'Гернси' },
    { country: 'Джерси' },
    { country: 'Остров Мэн' },
    { country: 'Танзания' },
    { country: 'Соединённые Штаты Америки' },
    { country: 'Виргинские Острова' },
    { country: 'Буркина-Фасо' },
    { country: 'Уругвай' },
    { country: 'Узбекистан' },
    { country: 'Венесуэла' },
    { country: 'Уоллис и Футуна' },
    { country: 'Самоа' },
    { country: 'Йемен' },
    { country: 'Замбия' },
  ];

  constructor() {}

  public getFormTitle() {
    return this.formTitle;
  }

  public getAllCountries(): { country: string }[] {
    return this.countries;
  }

  public hideForm() {
    this.isEditProduct = false;
    this.isAddProduct = false;
    this.isAddCategory = false;
    this.isUpdateCategory = false;
  }

  public getIsAddProduct(): boolean {
    return this.isAddProduct;
  }

  public getIsEditProduct(): boolean {
    return this.isEditProduct;
  }

  public getIsAddCategory(): boolean {
    return this.isAddCategory;
  }

  public getIsUpdateCategory(): boolean {
    return this.isUpdateCategory;
  }
  public setProductId(productId: string) {
    this.productId = productId;
  }
  public setCategoryId(categoryId: string) {
    this.categoryId = categoryId;
  }

  public getProductId() {
    return this.productId;
  }
  public getCategoryId() {
    return this.categoryId;
  }

  public invokeEditForm() {
    this.isEditProduct = true;
    this.isAddProduct = false;
    this.formTitle = 'Редактировать Продукт';
  }
  public invokeAddForm() {
    this.isEditProduct = false;
    this.isAddProduct = true;
    this.formTitle = 'Добавить Продукт';
  }

  public invokeAddCategory() {
    this.isAddCategory = true;
    this.isUpdateCategory = false;
    this.formTitle = 'Добавить Категорию';
    return this.isAddCategory;
  }
  public invokeUpdateCategory() {
    this.isUpdateCategory = true;
    this.isAddCategory = false;
    this.formTitle = 'Редактировать Категорию';
    return this.isUpdateCategory;
  }
}
