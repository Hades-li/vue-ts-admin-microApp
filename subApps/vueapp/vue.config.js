const packageName = 'vueapp'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '//localhost:9101':'//localhost:9001',
  chainWebpack(config) {
    config.output
      .library(packageName)
      .libraryTarget('umd')
      .jsonpFunction(`webpackJsonp_${packageName}`)
  },
  devServer: {
    port: 9001,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    }
  }
}
