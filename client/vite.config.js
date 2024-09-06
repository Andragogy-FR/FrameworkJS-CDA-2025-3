import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression, tarball } from 'vite-plugin-compression2'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    chunkSplitPlugin({
      strategy: 'unbundle',
      customSplitting: {
        'pages': ['/src/Pages'],
      }
    }),
    compression(),
    //tarball()
  ],
  build:{
    sourcemap: true
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@UXComponent' : path.resolve(__dirname, './src/Components/UX')
    }
  }
})
