const packageName = 'main';

module.exports = {
  /*configureWebpack: (config) => {
    config.output.library = packageName;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${packageName}`;
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },*/
  devServer: {
    port: 8080,
   /* proxy: {
      '/vue': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        ws: true,
        secure: false,
        /!*pathRewrite: {
          '/vueStatic': '/',
        },*!/
      },
      '/2vue2': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        ws: true,
        secure: false,
        /!*pathRewrite: {
          '/vueStatic': '/',
        },*!/
      },
    },*/
  },
};
