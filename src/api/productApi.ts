import axios from 'axios'
import { ProductSearchResponse } from './types'

export async function getProducts(query: string) {
  const url = `https://dummyjson.com/products/search?q=${query}`

  const response = await axios.get<ProductSearchResponse>(url)
  return response.data
}
