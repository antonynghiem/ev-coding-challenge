import { SortOption, SortOrder } from '@/interfaces/SortTypes';
import { createContext } from 'react';

export interface SortContextValues {
  order: SortOrder;
  key: SortOption;
}

export const SortContext = createContext({
  sort: { key: 'price', order: 'desc' },
  setSort: (sort: SortContextValues) => {},
});
