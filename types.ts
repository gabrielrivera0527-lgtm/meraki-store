
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Camisas' | 'Tazas' | 'Sublimados' | 'Otros';
  image: string;
}

export interface Review {
  id: string;
  user: string;
  comment: string;
  rating: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}
