import { useState } from 'react'
import { InputField } from '../common/components/InputField/InputField'
import { useDebounce } from 'use-debounce'
import { useGetProducts } from '../hooks/useGetProducts'
import { ProductCards } from '../ProductCards/ProductCards'

export function ProductSearch() {
  const [searchedTexted, setSearchedText] = useState('')
  const [debouncedSearchedText] = useDebounce(searchedTexted, 250)

  const getProducts = useGetProducts(debouncedSearchedText)

  return (
    <main className="flex justify-center w-[100vw]">
      <div className="flex flex-col h-screen items-center gap-4">
        <div className="w-full sm:w-[48rem] px-8 pt-10 sm:pt-60">
          <InputField
            isLoading={getProducts.isLoading}
            onChange={setSearchedText}
          />
        </div>
        <div className="flex-grow w-full sm:w-[48rem] px-8 mb-5 overflow-auto">
          <ProductCards products={getProducts.data} />
        </div>
      </div>
    </main>
  )
}
