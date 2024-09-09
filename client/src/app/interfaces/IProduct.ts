import { ICategory } from './ICategory';

interface IAvailability {
  availability: string;
}

export interface IProduct {
  _id?: String;
  id?: String;
  title: String;
  description: String;
  availability: IAvailability;
  wholesalePrice: String;
  retailPrice: String;
  fields: any[];
  category: ICategory;
  imgSrc: string;
}
// count: String;
// interface ICountry {
//   country: String;
// }
