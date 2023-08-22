'use client'

import { SearchContext } from '@/context/searchContext'
import { SortContext, SortContextValues } from '@/context/sortContext'
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

  return (
    <CacheProvider>
      <SearchContext.Provider value={{ search, setSearch }}>
        <SortContext.Provider value={{ sort, setSort }}>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </SortContext.Provider>
      </SearchContext.Provider>
    </CacheProvider>
  )
}
