const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')

const rootDir = path.resolve(__dirname, '..', '..')
const rootPath = path.resolve(rootDir, 'packages')

const mainConfig = {
  mode: 'production',
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
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser']
  },
  entry: path.resolve(rootPath, 'web', 'src', 'index.tsx'),
  target: 'electron-renderer',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(rootDir, 'dist', 'client', 'renderer'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 4000,
    publicPath: '/'
  },
  output: {
    path: path.resolve(rootDir, 'dist', 'client', 'renderer'),
    filename: 'js/[name].js',
    publicPath: './'
  }
}

const isElectron =
  process.env.IS_ELECTRON !== 'renderer' ? mainConfig : rendererConfig

module.exports = merge(common, isElectron)
