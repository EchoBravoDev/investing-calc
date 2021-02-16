import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

import pkg from './package.json'

process.env.VITE_APP_VERSION = pkg.version

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false
  },
  plugins: [
    vue(),
    ...WindiCSS(),
    VitePWA({
      minify: false,
      manifest: {
        name: 'EchoBravo - Investing Calc',
        short_name: 'Investing Calc',
        orientation: 'portrait',
        description: 'Calculadora de juros compostos',
        theme_color: '#66d59a',
        lang: 'pt-BR',
      },
      workbox: {
        cacheId: `bravo:${pkg.version}`,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        sourcemap: false
      }
    }),
  ]
})
