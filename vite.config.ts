import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@icons': '/src/common/icons',
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
    },
    include: ['src/**/*.test.{ts,tsx}'],
    // exclude: [
    //   '**/*.config.js',
    //   'node_modules',
    //   'src/index.tsx',
    //   'src/api/',
    //   'src/**/Loader',
    //   'src/hooks',
    // ],
  },
})
