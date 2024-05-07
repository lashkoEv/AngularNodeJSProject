import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormService } from '../../services/form.service';
import { ProductService } from '../../services/product.service';

import { NotificationService } from '../../services/notification.service';
import { SpinnerService } from '../../services/spinner.service';
import { IProduct } from '../../interfaces/IProduct';
import { ICategory } from '../../interfaces/ICategory';

import { HttpClient } from '@angular/common/http';
import { OrderFormService } from '../../services/order-form.service';
import { CartService } from '../../services/cart.service';
import { IOrder } from '../../interfaces/IOrder';
import { IOrdering } from '../../interfaces/IOrdering';

@Component({
  selector: 'app-ordering-form',
  templateUrl: './ordering-form.component.html',
  styleUrl: './ordering-form.component.scss',
})
export class OrderingFormComponent implements OnInit {
  public orderForm: FormGroup;

  public categories: {}[] = [];
  public category: ICategory;
  public product: IProduct;
  public cities: { city: string; delivery: string[] }[] = [
    {
      city: 'Киев',
      delivery: [
        'відділення №1  Адреса: вул. Пирогівський шлях, 135, 1100кг',
        'відділення №2 Адреса: вул. Богатирська, 11, 1100кг',
        'відділення №3 Адреса: вул. Слобожанська,13, 30кг',
      ],
    },
    {
      city: 'Днепр',
      delivery: [
        'відділення №1  Адреса: вул. Маршала Малиновського, 114, 135, 1100кг',
        'відділення №2 Адреса: просп. Богдана Хмельницького, 31Д, 1100кг',
        'відділення №3 Адреса:  вул. Тверська, 1,13, 30кг',
      ],
    },
    {
      city: 'Харьков',
      delivery: [
        'відділення №1  Адреса: Польова, 67, 114, 135, 1100кг',
        'відділення №2 Адреса: просп.Героїв Харкова (ран. Московський), 54а, 1100кг',
        'відділення №3 Адреса:  вул. Тюрінська (ран. Якіра), 124 30кг',
      ],
    },
  ];
  public isMessage: boolean = false;
  private cart: IOrder;
  public filteredDeliveries: { address: string }[];
  public typeOfDelivery: { type: String }[] = [
    { type: 'Отделение Новой Почты' },
    { type: 'Курьерская Доставка' },
  ];
  public isDeliveryAddress: boolean = false;
  public isDeliveryOnPost: boolean = false;

  public filteredTypeOfDelivery: { type: String }[];

  constructor(
    private fb: FormBuilder,
    public orderFormService: OrderFormService,
    private productService: ProductService,
    private cartService: CartService,

    private spinner: SpinnerService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.product = this.productService.getProduct();
    this.defineCart();
    this.createForm();
  }

  onTypeOfDeliveryChange(selectedDelivery: any) {
    const typeOfDelivery = selectedDelivery.type;
    const typeOfDeliveryObject = this.typeOfDelivery.find(
      (delivery) => delivery.type === typeOfDelivery
    );

    if (typeOfDeliveryObject.type === 'Курьерская Доставка') {
      this.isDeliveryAddress = true;
      this.isDeliveryOnPost = false;
      console.log('if', this.isDeliveryAddress);
    } else if (typeOfDeliveryObject.type === 'Отделение Новой Почты') {
      this.isDeliveryOnPost = true;
      this.isDeliveryAddress = false;
      console.log('else', this.isDeliveryAddress);
    }
  }

  onCityChange(selectedCity: any) {
    const cityName = selectedCity.city;

    const cityObject = this.cities.find((city) => city.city === cityName);

    if (cityObject) {
      this.filteredDeliveries = cityObject.delivery.map((address) => ({
        address,
      }));
    } else {
      this.filteredDeliveries = [];
    }
  }
  public onPhoneInput(event: any) {
    const phoneNumber = event;

    if (!phoneNumber.startsWith('+380')) {
      event.target.setCustomValidity('Номер телефона должен начинаться с +380');
      return;
    }

    if (phoneNumber.length !== 12) {
      event.target.setCustomValidity('Номер телефона должен содержать 12 цифр');
      return;
    }

    event.target.setCustomValidity('');
  }

  private defineCart() {
    this.cart = {
      products: this.cartService.getCartItems(),
      totalPrice: this.cartService.getCartTotalPrice(),
    };
  }

  private createForm(): void {
    this.orderForm = this.fb.group({
      nameAndLastName: ['', Validators.required],
      phoneNumber: [
        '+380',
        [Validators.required, Validators.pattern(/^\+380\d{9}$/)],
      ],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      typeOfDelivery: ['', Validators.required],
      deliveryAddress: ['', Validators.required],
      message: [''],
      cart: [{}],
    });
  }
  public toggleMessage() {
    this.isMessage = !this.isMessage;
  }
  public async onSubmit() {
    if (this.orderForm.valid) {
      const orderData: IOrdering = this.orderForm.value;
      orderData.cart = this.cart;
      this.orderFormService.add(orderData).subscribe(
        (response: Response) => {
          console.log('order is  successfully:', response);
          this.notification.setTextOfNotification(
            `Заказ успешно оформлен ${orderData._id}`
          );
          this.orderFormService.hideForm();

          this.cartService.resetCart();
        },
        (error: Error) => {
          console.error('Error adding product:', error);
          this.notification.setTextOfNotification(
            `Ошибка в оформлении заказа ${orderData._id}, ${error}`
          );
        }
      );
      console.log(orderData);
      this.spinner.start();
      this.notification.notify();
    }
  }
}
