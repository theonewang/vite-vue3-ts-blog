import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      // 选项写法
      '/admin': {
        target: 'https://xxx.com/api', // 代理目标地址
        changeOrigin: true, // 兼容基于名字的虚拟主机,true 代理服务会把origin修改未目标地址
        rewrite: (path) => path.replace(/^\/api/, '') // 路径重写
      }
    }
  }
})
