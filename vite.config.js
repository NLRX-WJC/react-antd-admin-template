import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from 'vite-plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';
import path from 'path'

import fs from 'fs/promises'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env,
    global: 'window',
  },
  // 静态资源引用路径，默认为"/"
   base: './',
   build: {
    // build目录名称，默认为"dist"
       outDir: 'build',
    // 静态资源存放目录名称，默认为"assets"
       assetsDir: 'static',
       commonjsOptions: {
        transformMixedEsModules: true, // 轉換兼容 commonjs
    },
  },
  server: {
    // 支持IP访问
    host: true,
    port: 3000,
    // 设置反向代理
    proxy: {
      // 以下示例表示：请求URL中含有"/api"，则反向代理到http://localhost
      // 例如: http://localhost:3000/api/login -> http://localhost/api/login
      '/api': {
          target: 'http: //localhost/',
          changeOrigin: true,
      },
    },
    open: '/',
    hmr: { timeout: 30000, overlay: false
    },
    watch: { usePolling: true
    },
  },
  esbuild: {
        loader: 'jsx',
        include: /src\/.*\.jsx?$/,
        exclude: [],
  },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
        {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            { filter: /src\/.*\.js$/
            },
                            async (args) => ({
                                loader: 'jsx',
                                contents: await fs.readFile(args.path, 'utf8'),
            })
                        )
          },
        },
      ],
    },
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    react(),
    commonjs(),
    visualizer(),
  ],
})
