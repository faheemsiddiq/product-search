import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/common/components',
      '@icons': '/src/common/icons',
      '@hooks': '/src/hooks',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'v8',
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
      include: ['**/*.{ts,tsx}'],
      exclude: ['**/*.config.{js,ts}', 'src/index.tsx', '**/{api,hooks}/*.ts'],
    },
  },
})
