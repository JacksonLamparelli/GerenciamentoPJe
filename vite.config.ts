import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GerenciamentoPJe/',
  build: {
    // Outras configurações de construção...
    rollupOptions: {
      input: {
        main: 'src/main.tsx', // Ponto de entrada JavaScript do seu aplicativo
      },
    },
  }
})