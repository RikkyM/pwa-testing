const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    liveReload: true,
    static: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    allowedHosts: ['.ngrok-free.app'],
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  }
})
