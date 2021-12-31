import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  open: '/index.html',
  host: '0.0.0.0',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src'
      },
      {
        find: '@assets',
        replacement: '/src/assets'
      },
      {
        find: '@components',
        replacement: '/src/components'
      },
      {
        find: '@views',
        replacement: '/src/views'
      }
    ]
  }
})
