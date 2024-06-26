export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id: string;
  categoryId: string;
  category: {
    id: string;
    name: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
  };
  title: string;
  description: string;
  imageUrls: any;
  price: number;
  price_discount: string;
  rating: number;
  total_reviews: number;
  facilites: string;
  address: string;
  province: string;
  location_maps: string;
  createdAt: string;
  updatedAt: string;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  terms_condition: string;
  promo_code: string;
  promo_discount_price: number;
  minimum_claim_price: number;
  createdAt: string;
  updatedAt: string;
}
