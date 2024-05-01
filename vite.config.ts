/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      thresholds: {
        lines: 90,
        branches: 90,
        functions: 90,
        statements: 90,
      },
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json', 'html'],
      include: ['src/**/*'],
      exclude: [
        'src/hooks',
        'src/mocks',
        '**/*/*.stories.tsx',
        '**/*/*.d.ts',
        '**/*/index.ts',
        'src/main.tsx',
        'src/App.tsx',
      ],
    },
  },
})
