import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: '后台管理',
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '/api' },
    },
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
