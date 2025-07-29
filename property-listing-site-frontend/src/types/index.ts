
export interface Property {
  _id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  price: number;
  contact: string;
  image: string;
}

export interface FilterState {
  location: string;
  type: string;
  price: string;
}
