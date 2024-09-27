import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/productApi'

export function useGetProducts(query: string) {
  return useQuery({
    queryKey: ['get-products', query],
    queryFn: () => getProducts(query),
    select: (data) => data.products,
    enabled: query !== '',
  })
}
