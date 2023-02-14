/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

/// <reference types="vitest" />
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
       // jest like test api
    globals: true,
    // 模拟dom环境
    environment: 'happy-dom',
    // 支持tsx,jsx
    transformMode: {
      web: [/.[tj]sx$/]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
