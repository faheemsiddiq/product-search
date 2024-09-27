import magnifyingIcon from '@icons/magnifying-icon.svg'
import crossIcon from '@icons/cross-icon.svg'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Loader } from '../Loader/Loader'

interface Props {
  isLoading?: boolean
  onChange?: (searchText: string) => void
}

export function InputField(props: Props) {
  /* c8 ignore next */
  const { isLoading = false, onChange = () => {} } = props
  const [searchText, setSearchText] = useState('')
  const [debouncedSearchedText] = useDebounce(searchText, 250)

  useEffect(() => {
    onChange(searchText)
  }, [debouncedSearchedText])

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-1">
        <img aria-label="magnifying-icon" src={magnifyingIcon} />
      </div>
      <input
        type="text"
        className="w-full pl-6 pr-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for a product"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
        {searchText &&
          (isLoading ? (
            <Loader />
          ) : (
            <button
              aria-label="clear-button"
              onClick={() => {
                console.log('elo')
                setSearchText('')
              }}
            >
              <img src={crossIcon} />
            </button>
          ))}
      </div>
    </div>
  )
}
