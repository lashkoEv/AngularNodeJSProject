import { IOrderedProduct } from './IOrderedProduct';
import { IUser } from './IUser';

export interface IOrder {
  user: IUser;
  products: IOrderedProduct[];
  totalPrice: number;
}
