import { ICategory } from './ICategory';

export interface IProduct {
  _id?: String;
  title: String;
  description: String;
  country: String;
  wholesalePrice: String;
  retailPrice: String;
  count: String;
  fields: any[];
  category: ICategory;
  imgSrc: String;
}
