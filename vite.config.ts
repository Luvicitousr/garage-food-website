import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'; // 1. Importe o plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. Adicione o plugin PWA com a configuração
    VitePWA({
      registerType: 'autoUpdate', // Mantém o PWA atualizado automaticamente
      // Arquivos que devem ser pré-cacheados para o modo offline
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'assets/*.svg'],
      manifest: {
        name: 'Garage Food - Salgados Artesanais',
        short_name: 'Garage Food',
        description: 'Os melhores salgados artesanais da cidade! Peça já.',
        theme_color: '#F97316', // Laranja do seu site
        background_color: '#111827', // Cinza escuro do fundo
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});