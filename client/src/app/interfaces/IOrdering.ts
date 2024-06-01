import { IOrder } from './IOrder';

export interface IOrdering {
  _id?: String;
  nameAndLastName: String;
  phoneNumber: String;
  city: String;
  email: String;
  message?: String;
  typeOfDelivery: String;
  deliveryAddress: String;
  cart: IOrder;
}
