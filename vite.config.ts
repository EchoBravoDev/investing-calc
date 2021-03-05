import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'

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
      manifest: {
        name: 'EchoBravo - Investing Calc',
        short_name: 'Investing Calc',
        orientation: 'portrait',
        description: 'Calculadora de juros compostos',
        theme_color: '#66d59a',
        lang: 'pt-BR',
        icons: addIconVersion([
          {
            "src": "/icons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "/icons/android-chrome-maskable-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/icons/android-chrome-maskable-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/icons/apple-touch-icon-60x60.png",
            "sizes": "60x60",
            "type": "image/png"
          },
          {
            "src": "/icons/apple-touch-icon-76x76.png",
            "sizes": "76x76",
            "type": "image/png"
          },
          {
            "src": "/icons/apple-touch-icon-120x120.png",
            "sizes": "120x120",
            "type": "image/png"
          },
          {
            "src": "/icons/apple-touch-icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icons/apple-touch-icon-180x180.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "/icons/apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png"
          },
          {
            "src": "/icons/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
          },
          {
            "src": "/icons/favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "/icons/msapplication-icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/mstile-150x150.png",
            "sizes": "150x150",
            "type": "image/png"
          }
        ])
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
