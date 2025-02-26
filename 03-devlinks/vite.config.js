import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: true,
    port:3000, //porta praa conexão, altere quando necessário
    open:true, //abre automaticamente o navegador e inicia o server
  }
})
