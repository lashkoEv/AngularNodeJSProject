import { ICategory } from './ICategory';

interface IAvailability {
  availability: String;
}

export interface IProduct {
  _id?: String;
  id?: String;
  title: String;
  description: String;
  availability: IAvailability;
  wholesalePrice: String;
  retailPrice: String;
  count: String;
  fields: any[];
  category: ICategory;
  imgSrc: string;
}

// interface ICountry {
//   country: String;
// }
