import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// npm i --save-dev @types/path  not found
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src'),
    },
  },
  base: './', // 设置打包路径
  server: {
    hmr: { overlay: false },

    // 服务配置
    port: 4399, // 设置服务器启动端口
    open: true, // 设置服务器启动自动打开浏览器；
    cors: true, // 允许跨域
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:x000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // },
  },
});