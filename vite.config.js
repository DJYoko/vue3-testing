import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { sync } from 'glob'
import { resolve } from 'path'

const htmlList = {}

// check ./html directory
sync('./html/**/*.html').forEach((item) => {
  const itemKey = item.replace(/[\\]/g, '-').replace(/\.html$/, '')
  const itemValue = './' + item.replace(/\\/g, '/')
  htmlList[itemKey] = itemValue
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: htmlList,
      output: {
        entryFileNames: `html/assets/[name].js`,
        chunkFileNames: `html/assets/[name].js`,
        assetFileNames: `html/assets/[name].[ext]`,
        dir: resolve(__dirname, 'dist'), // ビルド後の出力先を /dist に指定
      },
    },
  },
  server: {
    open: '/html/',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
    extensions: ['.js', '.vue', '.json'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './ComponentTest/setup.js',
    include: ['./ComponentTest/case/**/*.spec.js'],
  },
})
