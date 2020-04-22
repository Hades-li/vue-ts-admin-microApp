const path = require('path')
const { name } = require('./package')
const cors = require('cors')
const port = 5001

module.exports = {
  devServer: {
    port,
    before(app, server) {
      app.use(cors())
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : `//localhost:${port}`, // TODO: Remember to change this to fit your need
  lintOnSave: process.env.NODE_ENV === 'development',
  pwa: {
    name: name
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
/*   configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    }
  }, */
  chainWebpack(config) {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name)
    config.plugin("html").tap(args => {
      args[0].minify = false;
      return args;
    });
    // 把子应用打包成 umd 库格式
    config.output
      .jsonpFunction(`webpackJsonp_${name}`)
      .library(`${name}-[name]`)
      .libraryTarget('umd')
  }
}
