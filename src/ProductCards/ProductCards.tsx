import { Product } from '../api/types'
import { ProductCard } from './ProductCard/ProductCard'

interface Props {
  products: Product[]
}

export function ProductCards(props: Props) {
  const { products } = props

  if (products?.length === 0) {
    return <ProductCard title={null} />
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map(({ thumbnail, title, description, price }, key) => (
          <ProductCard
            key={key}
            imageUrl={thumbnail}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </div>
    </div>
  )
}
