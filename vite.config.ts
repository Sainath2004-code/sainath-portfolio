import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          maxSize: 440_000,
          groups: [
            { name: 'vendor-react', test: /node_modules[\\/](react|react-dom)[\\/]/, priority: 10 },
            { name: 'vendor-motion', test: /node_modules[\\/]framer-motion[\\/]/, priority: 9 },
            { name: 'vendor-r3f', test: /node_modules[\\/]@react-three[\\/]fiber[\\/]/, priority: 8 },
            { name: 'vendor-three', test: /node_modules[\\/]three[\\/]/, priority: 7, maxSize: 360_000 },
            { name: 'vendor-icons', test: /node_modules[\\/]lucide-react[\\/]/, priority: 6 },
            { name: 'vendor-lenis', test: /node_modules[\\/]lenis[\\/]/, priority: 6 },
            { name: 'vendor-shared', test: /node_modules[\\/]/, priority: 1, maxSize: 360_000 },
          ],
        },
      },
    },
  },
})
