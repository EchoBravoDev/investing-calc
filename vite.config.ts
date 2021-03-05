import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

import icons from './icons.json'
import pkg from './package.json'

process.env.VITE_APP_VERSION = pkg.version

type Icon = {
  src: string;
  sizes: string;
  type: string;
  purpose?: string;
}

const addIconVersion = (icons: Icon[]) => {
  return icons.map(icon => {
    return {
      ...icon,
      src: `${icon.src}?v${process.env.VITE_APP_VERSION}`
    }
  })
}

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
      injectRegister: false,
      manifest: {
        name: 'EchoBravo - Investing Calc',
        short_name: 'Investing Calc',
        orientation: 'portrait',
        description: 'Calculadora de juros compostos',
        theme_color: '#66d59a',
        lang: 'pt-BR',
        icons: addIconVersion(icons)
      },
      workbox: {
        cacheId: `bravo:${pkg.version}`,
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        sourcemap: false
      }
    }),
  ]
})
