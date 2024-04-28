import { ICategory } from './ICategory';

export interface IProduct {
  _id?: string;
  title: string;
  description: string;
  country: string;
  wholesalePrice: string;
  retailPrice: string;
  count: string;
  fields: string;
  category: ICategory;
  imgSrc: string;
}
