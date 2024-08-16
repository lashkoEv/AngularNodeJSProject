import { IOrder } from './IOrder';

export enum OrderStatus {
  PENDING = 'Новий',
  CONFIRMED = 'Підтверджений',
  SHIPPED = 'Відправлений',
  COMPLETED = 'Виконаний',
}

export interface IOrdering {
  _id?: String;
  id: String;
  nameAndLastName: String;
  phoneNumber: String;
  city: String;
  email: String;
  message?: String;
  typeOfDelivery: String;
  deliveryAddress: String;
  cart: IOrder;
  status?: OrderStatus;
}
