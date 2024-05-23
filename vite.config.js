import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { sync } from 'glob';

const htmlList = {};

// check ./html directory
sync('./html/**/*.html').forEach((item) => {
  const itemKey = item.replace(/[\\]/g, '-').replace(/\.html$/, '');
  const itemValue = './' + item.replace(/\\/g, '/');
  htmlList[itemKey] = itemValue;
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: htmlList,
      output: {
        // remove hash
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    open: '/html/',
  },
  resolve: {
    alias: {
      // import path => "@" === "./src"
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.vue', '.json'],
  },
});
