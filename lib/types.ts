export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
};

export type Store = {
  id: string;
  name: string;
  city: string;
  rating: number;
  bio: string;
  products: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  store: string;
  image: string;
  rating: number;
  stock: number;
  badge: string;
};

export type Review = {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
};
