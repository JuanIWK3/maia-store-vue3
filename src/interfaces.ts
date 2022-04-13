export interface Camisa {
  name: string;
  image: string;
  price: number;
  description: string;
  sizes: number[] | string[];
  inStock: boolean;
}
