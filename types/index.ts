export type Lecture = {
  categories: Category[];
  created_at: string;
  date: string;
  description: string;
  id: number;
  infoUrl: string;
  isOnline: boolean;
  isPropagated: boolean;
  location: Location;
  price?: string;
  title: string;
};

export type Category =
  | 'ai'
  | 'blockchain'
  | 'business'
  | 'cestování'
  | 'data'
  | 'design'
  | 'e-commerce'
  | 'eco'
  | 'finance'
  | 'historie'
  | 'investice'
  | 'krypto'
  | 'marketing'
  | 'management'
  | 'meta'
  | 'nft'
  | 'osobní rozvoj'
  | 'programování'
  | 'sales'
  | 'tech';

export type Location =
  | 'Online'
  | 'Praha'
  | 'Brno'
  | 'Ostrava'
  | 'Plzeň'
  | 'Liberec'
  | 'Olomouc'
  | 'Č. Budějovice'
  | 'H. Králové';

export type FilterSettings = {
  category?: Category;
  location?: Location;
  month?: number;
  isFree: boolean;
  isOnline: boolean;
};
