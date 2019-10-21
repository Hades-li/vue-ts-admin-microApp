const baseUrl = 'http://pre.mgr.s-gsun.com/'

module.exports = {
  devServer: {
    port: 9000,
    proxy: {
      '/fs': {
        target: baseUrl,
        changeOrigin: true,
        ws: false,
        secure: false,
        pathRewrite: {
          '^/fs': '/fs'
        },
      },
    },
  },
  chainWebpack(config) {
    config.externals({
      Vue: 'Vue'
    })
  }
};
