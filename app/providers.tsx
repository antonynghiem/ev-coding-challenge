'use client'

import { FilterContext } from '@/context/filterContext'
import { SearchContext } from '@/context/searchContext'
import { SortContext, SortContextValues } from '@/context/sortContext'
import { Filter } from '@/interfaces/FilterTypes'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  const [sort, setSort] = useState<SortContextValues>({ key: 'price', order: 'desc' });
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<Filter>('');

  return (
    <CacheProvider>
      <SearchContext.Provider value={{ search, setSearch }}>
        <FilterContext.Provider value={{ filter, setFilter }}>
          <SortContext.Provider value={{ sort, setSort }}>
            <ChakraProvider>
              {children}
            </ChakraProvider>
          </SortContext.Provider>
        </FilterContext.Provider>
      </SearchContext.Provider>
    </CacheProvider>
  )
}
