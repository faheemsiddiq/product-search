import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('should render "No products found" when title is null', () => {
    const { getByText } = setupComponent({ title: null })

    expect(getByText('No products found')).toBeInTheDocument()
  })

  it('should render successfully', () => {
    const props = {
      imageUrl: 'https://example.com/image.jpg',
      title: 'Test Product',
      description: 'This is a test product description.',
      price: 29.99,
    }
    const { image, title, getByText } = setupComponent(props)

    expect(image()).toBeInTheDocument()
    expect(image()).toHaveAttribute('src', props.imageUrl)
    expect(title(props.title)).toBeInTheDocument()
    expect(getByText(props.description)).toBeInTheDocument()
    expect(getByText(`$${props.price}`)).toBeInTheDocument()
  })
})

function setupComponent(props: React.ComponentProps<typeof ProductCard>) {
  render(<ProductCard {...props} />)

  return {
    image: () => screen.getByRole('img', { name: 'Product Image' }),
    title: (title: string) =>
      screen.getByRole('heading', { level: 2, name: title }),
    getByText: (text: string) => screen.getByText(text),
  }
}
