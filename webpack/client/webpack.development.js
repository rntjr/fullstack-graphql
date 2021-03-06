const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

const rootPath = path.resolve(__dirname, '..', '..', 'packages')
const rootDir = path.resolve(__dirname, '..', '..')

const mainConfig = {
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'source-map',
  entry: path.resolve(rootPath, 'client', 'main.ts'),
  target: 'electron-main',
  output: {
    path: path.resolve(rootDir, 'dist', 'client'),
    filename: '[name].js'
  },
  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  }
}

const rendererConfig = {
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser']
  },
  entry: path.resolve(rootPath, 'web', 'src', 'index.tsx'),
  target: 'electron-renderer',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(rootPath, 'dist', 'client', 'renderer'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
    publicPath: '/'
  },
  output: {
    path: path.resolve(rootPath, 'dist', 'client', 'renderer'),
    filename: 'js/[name].js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'web', 'public', 'index.html')
    }),
    'development' && new ReactRefreshWebpackPlugin()
  ].filter(Boolean)
}

const isElectron =
  process.env.IS_ELECTRON !== 'renderer' ? mainConfig : rendererConfig

module.exports = merge(common, isElectron)
