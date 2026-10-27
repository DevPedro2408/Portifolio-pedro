import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuração do Vite. O plugin do React permite usar JSX.
// Se um dia publicar no GitHub Pages (em vez de Vercel/Netlify),
// será preciso definir a opção `base` com o nome do repositório.
export default defineConfig({
  plugins: [react()],
});
