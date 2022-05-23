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
  'finance',
  'investice',
  'krypto',
  'management',
  'marketing',
  'nft',
  'osobní rozvoj',
  'programování',
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
