export type ProductCategory = 'All' | 'Hair' | 'Skin' | 'Pantry';

export interface ProductVariant {
  size: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Hair' | 'Skin' | 'Pantry';
  primarySize: string;
  primaryPrice: number;
  variants: ProductVariant[];
  tagline: string;
  labelCount?: string; // e.g. "29 Powerful Ingredients" or "20 Herbal Ingredients"
  ingredients: string[];
  benefits: string[];
  howToUse: string[];
  shelfLife: string;
  storage: string;
  farmOrigin: string;
  packagingType: 'Pouch' | 'Bottle';
  accentColor: string;
  isBestseller?: boolean;
  imageFile?: string;
  realPhotoLabel?: string;
}

export interface OrderItem {
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}

export type ActivePage = 
  | 'home' 
  | 'story' 
  | 'farm' 
  | 'process' 
  | 'products' 
  | 'how-to-order' 
  | 'faq' 
  | 'contact'
  | 'privacy';
