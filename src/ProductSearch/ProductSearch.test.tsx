import { render, screen, waitFor } from '@testing-library/react'
import { ProductSearch } from './ProductSearch'
import { vi } from 'vitest'

vi.mock('@hooks/useGetProducts', () => ({
  useGetProducts: () => ({
    data: [
      {
        thumbnail: 'image1.jpg',
        title: 'Product 1',
        description: 'Description 1',
        price: 100,
      },
      {
        thumbnail: 'image2.jpg',
        title: 'Product 2',
        description: 'Description 2',
        price: 200,
      },
    ],
  }),
}))

describe('ProductSearch', () => {
  it('should render successfully and display search results', async () => {
    const { searchField, productTitles } = setupComponent()
    expect(searchField()).toBeInTheDocument()
    await waitFor(() => expect(productTitles().length).toBe(2))
  })
})

function setupComponent() {
  render(<ProductSearch />)

  return {
    searchField: () => screen.getByPlaceholderText('Search for a product'),
    productTitles: () => screen.getAllByText(/Product \d/),
  }
}
