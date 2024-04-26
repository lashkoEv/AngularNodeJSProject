import { IOrderedProduct } from './IOrderedProduct';
import { IUser } from './iUser';

export interface IOrder {
  user: IUser;
  products: IOrderedProduct[];
  totalPrice: number;
}
