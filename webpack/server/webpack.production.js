const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const common = require('./webpack.config.js')

const rootPackage = path.resolve(__dirname, '..', '..', 'packages')

module.exports = merge(common, {
  devtool: 'source-map',
  entry: [path.resolve(rootPackage, 'server', 'src', 'main.ts')],
  externals: [nodeExternals({})],
  mode: 'production',
  plugins: [new CleanWebpackPlugin()]
})
