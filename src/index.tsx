import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProductSearch } from './ProductSearch/ProductSearch.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProductSearch />
    </QueryClientProvider>
  </StrictMode>,
)
