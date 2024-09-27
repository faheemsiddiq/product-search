import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { InputField } from './InputField'
import { vi } from 'vitest'

describe('InputField', () => {
  it('should render successfully', () => {
    const { magnifyingIcon, searchField } = setupComponent()

    expect(magnifyingIcon()).toBeInTheDocument()
    expect(searchField()).toBeInTheDocument()
  })

  it('should call onChange with the search text after debounce', async () => {
    const { searchField, onChange } = setupComponent()
    userEvent.type(searchField(), 'testing')
    await waitFor(() => expect(onChange).toHaveBeenCalledWith('testing'))
  })

  it('should clear search text when clear button is clicked', async () => {
    const { clearButton, searchField } = setupComponent()
    expect(clearButton()).not.toBeInTheDocument()
    userEvent.type(searchField(), 'testing')
    await waitFor(() => expect(searchField()).toHaveDisplayValue('testing'))
    userEvent.click(clearButton()!)
    await waitFor(() => expect(searchField()).toHaveDisplayValue(''))

    expect(clearButton()).not.toBeInTheDocument()
  })

  it('should show Loader when isLoading is true', async () => {
    const { loader, searchField } = setupComponent({ isLoading: true })
    userEvent.type(searchField(), 'testing')
    await waitFor(() => expect(loader()).toBeInTheDocument())
  })
})

function setupComponent(props: any = {}) {
  const { isLoading = false } = props
  const onChange = vi.fn()
  render(<InputField isLoading={isLoading} onChange={onChange} />)

  return {
    magnifyingIcon: () => screen.getByRole('img', { name: 'magnifying-icon' }),
    searchField: () => screen.getByPlaceholderText('Search for a product'),
    clearButton: () => screen.queryByRole('button', { name: 'clear-button' }),
    loader: () => screen.getByRole('loader'),
    onChange,
  }
}
