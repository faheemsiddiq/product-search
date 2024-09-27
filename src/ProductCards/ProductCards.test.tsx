import { render, screen } from '@testing-library/react'
import { ProductCards } from './ProductCards'
import { Product } from '../api/types'

describe('ProductCards', () => {
  it('should render successfully', () => {
    const products = [
      {
        thumbnail: 'https://example.com/image.jpg',
        title: 'Product 1',
        description: 'description 1',
        price: 0.99,
      },
      {
        thumbnail: 'https://example.com/image.jpg',
        title: 'Product 2',
        description: 'description 2',
        price: 1.99,
      },
    ]
    const { getByText } = setupComponent({ products })

    expect(getByText(products[0].title)).toBeInTheDocument()
    expect(getByText(products[1].title)).toBeInTheDocument()
  })

  it('should render one card when products are empty', () => {
    const products: Product[] = []
    const { getByText } = setupComponent({ products })

    expect(getByText('No products found')).toBeInTheDocument()
  })
})

function setupComponent(props: React.ComponentProps<typeof ProductCards>) {
  render(<ProductCards {...props} />)

  return {
    getByText: (text: string) => screen.getByText(text),
  }
}
