import { ICategory } from './ICategory';

// interface ICountry {
//   country: String;
// }

export interface IProduct {
  _id?: String;
  title: String;
  description: String;
  // availability: String;
  // country: ICountry;
  wholesalePrice: String;
  retailPrice: String;
  count: String;
  fields: any[];
  category: ICategory;
  imgSrc: string;
}
