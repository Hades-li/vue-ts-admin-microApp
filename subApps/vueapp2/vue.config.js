const packageName = 'vueapp2'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '':'//localhost:8082',
  configureWebpack: (config) => {
    config.output.library = packageName
    config.output.libraryTarget = 'umd'
    config.output.jsonpFunction = `webpackJsonp_${packageName}`
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...

    }
  },

  devServer: {
    port: 8082,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8080",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    }
  }
}
