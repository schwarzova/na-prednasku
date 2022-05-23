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
  | 'business'
  | 'nft'
  | 'ai'
  | 'osobní rozvoj'
  | 'krypto'
  | 'tech'
  | 'marketing'
  | 'finance'
  | 'investice'
  | 'programování'
  | 'management'
  | 'blockchain'
  | 'data';

export type Location =
  | 'Online'
  | 'Praha'
  | 'Brno'
  | 'Ostrava'
  | 'Plzeň'
  | 'Liberec'
  | 'Olomouc'
  | 'České Budějovice'
  | 'Hradec Králové';

export type FilterSettings = {
  category?: Category;
  location?: Location;
  month?: number;
  isFree: boolean;
  isOnline: boolean;
};
