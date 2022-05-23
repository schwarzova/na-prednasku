import { Category, FilterSettings, Location } from '../../types';

export const defaultFilter: FilterSettings = {
  category: undefined,
  location: undefined,
  month: undefined,
  isFree: false,
  isOnline: false,
};

export const categoryOptions: Category[] = [
  'business',
  'nft',
  'ai',
  'osobní rozvoj',
  'krypto',
  'tech',
  'marketing',
  'finance',
  'investice',
  'programování',
  'management',
  'blockchain',
  'data',
];

export const locationOptions: Location[] = [
  'Online',
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
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
