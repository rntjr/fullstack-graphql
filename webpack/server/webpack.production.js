const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const common = require('./webpack.config.js')

const rootDir = path.resolve(__dirname, '..', '..')
const rootPath = path.resolve(rootDir, 'packages', 'server')

module.exports = merge(common, {
  devtool: 'source-map',
  entry: [path.join(rootPath, 'src', 'server.ts')],
  externals: [nodeExternals({})],
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: 'server.js',
    path: path.join(rootDir, 'dist', 'server')
  },
  resolve: {
    extensions: ['.ts']
  },
  target: 'node'
})
