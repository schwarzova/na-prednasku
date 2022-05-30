import { Category, FilterSettings, Location } from '../../types';

export const defaultFilter: FilterSettings = {
  category: undefined,
  location: undefined,
  month: undefined,
  isFree: false,
  isOnline: false,
};

export const categoryOptions: Category[] = [
  'ai',
  'blockchain',
  'business',
  'data',
  'design',
  'e-commerce',
  'eco',
  'finance',
  'investice',
  'krypto',
  'management',
  'marketing',
  'meta',
  'nft',
  'osobní rozvoj',
  'programování',
  'sales',
  'tech',
];

export const locationOptions: Location[] = [
  'Online',
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'Č. Budějovice',
  'H. Králové',
];

export const months = [
  'Leden',
  'Únor',
  'Březen',
  'Duben',
  'Květen',
  'Červen',
  'Červenec',
  'Srpen',
  'Září',
  'Říjen',
  'Listopad',
  'Prosinec',
];
