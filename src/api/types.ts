export interface Product {
  title: string
  description: string
  price: number
  thumbnail: string
  // There are more fields than this, but these are the ones we are explicitly
  // using at the moment.
}

export interface ProductSearchResponse {
  products: Product[]
  // There are more fields than this, but these are the ones we are explicitly
  // using at the moment.
}
