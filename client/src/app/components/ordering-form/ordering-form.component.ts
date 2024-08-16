import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductService } from '../../services/product.service';

import { NotificationService } from '../../services/notification.service';
import { SpinnerService } from '../../services/spinner.service';
import { IProduct } from '../../interfaces/IProduct';
import { ICategory } from '../../interfaces/ICategory';

import { OrderFormService } from '../../services/order-form.service';
import { CartService } from '../../services/cart.service';
import { IOrder } from '../../interfaces/IOrder';
import { IOrdering, OrderStatus } from '../../interfaces/IOrdering';
import { IWarehouse } from '../../interfaces/IWarehouse';

@Component({
  selector: 'app-ordering-form',
  templateUrl: './ordering-form.component.html',
  styleUrl: './ordering-form.component.scss',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('500ms ease-in', style({ opacity: 1 }))]),
    ]),
  ],
})
export class OrderingFormComponent implements OnInit {
  public orderForm: FormGroup;
  public selectedCity: any;
  public categories: {}[] = [];
  public category: ICategory;
  public product: IProduct;
  public orderId: String;
  public isOrderSucces: boolean = false;
  public isMessage: boolean = false;
  private cart: IOrder;

  public typeOfDelivery: { type: String }[] = [
    { type: 'Отделение Новой Почты' },
    { type: 'Курьерская Доставка' },
  ];
  public isDeliveryAddress: boolean = false;
  public isDeliveryOnPost: boolean = false;
  public offices: IWarehouse[] = [];
  public filteredTypeOfDelivery: { type: String }[];
  public cities: IWarehouse[] = [];

  public filteredOffices: IWarehouse[] = [];

  constructor(
    private fb: FormBuilder,
    public orderFormService: OrderFormService,
    private productService: ProductService,
    private cartService: CartService,

    private spinner: SpinnerService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    if (this.isOrderSucces) {
      this.isOrderSucces = false;
    }

    this.product = this.productService.getProduct();
    this.defineCart();
    this.createForm();
    this.orderFormService.getNovaPoshtaOffices().subscribe((data) => {
      this.offices = data;
      if (data) {
        const uniqueCities = this.getUniqueByRegionCity(this.offices);

        this.cities.push(...uniqueCities);
      }
    });
  }

  public getUniqueByRegionCity(offices: IWarehouse[]): IWarehouse[] {
    const seen = new Set();
    return offices.filter((office) => {
      const isUnique = !seen.has(office.CityDescription);
      if (isUnique) {
        seen.add(office.CityDescription);
      }
      return isUnique;
    });
  }
  private generateRandomId(): string {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return timestamp.toString() + randomNum.toString();
  }
  public onTypeOfDeliveryChange(selectedDelivery: any) {
    const typeOfDelivery = selectedDelivery.type;
    const typeOfDeliveryObject = this.typeOfDelivery.find(
      (delivery) => delivery.type === typeOfDelivery
    );

    if (typeOfDeliveryObject.type === 'Курьерская Доставка') {
      this.isDeliveryAddress = true;
      this.isDeliveryOnPost = false;
    } else if (typeOfDeliveryObject.type === 'Отделение Новой Почты') {
      this.isDeliveryOnPost = true;
      this.isDeliveryAddress = false;
    }
  }

  public onCityChange(selectedCity: IWarehouse): void {
    const cityName = selectedCity.CityDescription;
    this.selectedCity = cityName;
    this.filteredOffices = this.offices.filter(
      (office) =>
        office.CityDescription === cityName &&
        !office.Description.includes('Поштомат')
    );

    console.log(this.selectedCity);
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
      id: [this.generateRandomId()],
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
      status: [''],
    });
  }
  public toggleMessage() {
    this.isMessage = !this.isMessage;
  }
  public async onSubmit() {
    if (this.orderForm.valid) {
      const orderData: IOrdering = this.orderForm.value;
      orderData.cart = this.cart;
      orderData.status = OrderStatus.PENDING;
      this.orderFormService.setOrderId(orderData.id);
      this.orderFormService.add(orderData).subscribe(
        (response: Response) => {
          console.log('order is  successfully:', response);
          this.notification.setTextOfNotification(
            `Заказ успешно оформлен ${orderData.id}`
          );
          this.orderFormService.hideForm();

          this.cartService.resetCart();
          this.isOrderSucces = true;
        },
        (error: Error) => {
          console.error('Error adding product:', error);
          this.notification.setTextOfNotification(
            `Ошибка в оформлении заказа ${orderData.id}, ${error}`
          );
        }
      );
      console.log(orderData);

      this.spinner.start();
      this.notification.notify();
    }
  }
}
