import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      "@home": '/src/pages/home',
      '@pages': '/src/pages',
      '@types': '/src/types',
      '@services': '/src/services',
      '@utils': '/src/utils',
      '@styles': '/src/styles',
      '@providers': '/src/providers',
    },
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  }
})

