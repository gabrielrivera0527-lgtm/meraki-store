
import { Product, Review, PortfolioItem } from './types';

export const WHATSAPP_NUMBER = '50374446720';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Camisa Personalizada Premium',
    description: 'Algodón de alta calidad con estampado duradero. Diseño personalizado a tu gusto.',
    price: 15.00,
    category: 'Camisas',
    image: 'https://picsum.photos/seed/shirt1/600/800'
  },
  {
    id: '2',
    name: 'Taza de Cerámica 11oz',
    description: 'Perfecta para el café de la mañana. Sublimación de alta definición.',
    price: 8.00,
    category: 'Tazas',
    image: 'https://picsum.photos/seed/mug1/600/600'
  },
  {
    id: '3',
    name: 'Gorra Sublimada',
    description: 'Estilo y personalización en un solo accesorio. Variedad de colores disponibles.',
    price: 10.00,
    category: 'Sublimados',
    image: 'https://picsum.photos/seed/cap1/600/600'
  },
  {
    id: '4',
    name: 'Termo Metálico',
    description: 'Mantiene tus bebidas frías o calientes por horas. Diseño elegante grabado.',
    price: 20.00,
    category: 'Sublimados',
    image: 'https://picsum.photos/seed/thermos1/600/600'
  },
  {
    id: '5',
    name: 'Camisa Duo Pareja',
    description: 'Set de dos camisas con diseños complementarios. El regalo perfecto.',
    price: 25.00,
    category: 'Camisas',
    image: 'https://picsum.photos/seed/shirt2/600/800'
  },
  {
    id: '6',
    name: 'Taza Mágica',
    description: 'Cambia de color con el calor revelando tu diseño oculto.',
    price: 12.00,
    category: 'Tazas',
    image: 'https://picsum.photos/seed/mugmagic/600/600'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 'p1', title: 'Diseño Identidad Corporativa', imageUrl: 'https://picsum.photos/seed/p1/800/600', category: 'Graphic Design' },
  { id: 'p2', title: 'Kit de Graduación', imageUrl: 'https://picsum.photos/seed/p2/800/600', category: 'Sublimation' },
  { id: 'p3', title: 'Camisas Evento Familiar', imageUrl: 'https://picsum.photos/seed/p3/800/600', category: 'Apparel' },
  { id: 'p4', title: 'Mugs para Empresa', imageUrl: 'https://picsum.photos/seed/p4/800/600', category: 'Branding' },
  { id: 'p5', title: 'Ilustración Personalizada', imageUrl: 'https://picsum.photos/seed/p5/800/600', category: 'Illustration' },
  { id: 'p6', title: 'Packaging Creativo', imageUrl: 'https://picsum.photos/seed/p6/800/600', category: 'Graphic Design' },
];

export const REVIEWS: Review[] = [
  { id: 'r1', user: 'Andrea Méndez', comment: '¡Increíble trabajo! La calidad de las camisas superó mis expectativas. Muy recomendados.', rating: 5 },
  { id: 'r2', user: 'Carlos Rivas', comment: 'Excelente atención al cliente y entrega súper rápida. La taza quedó perfecta.', rating: 5 },
  { id: 'r3', user: 'Sofía López', comment: 'Me encanta el toque artístico que le dan a cada diseño. Muy originales.', rating: 4 },
];
