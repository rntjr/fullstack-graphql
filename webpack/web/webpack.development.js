const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

const rootPackage = path.resolve(__dirname, '..', '..', 'packages')
const rootDir = path.resolve(__dirname, '..', '..')

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  entry: path.resolve(rootPackage, 'web', 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(rootPackage, 'web', 'public'),
    historyApiFallback: true,
    hot: true,
    port: 4000
  },
  output: {
    path: path.resolve(rootDir, 'dist', 'web'),
    filename: 'client.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPackage, 'web', 'public', 'index.html')
    }),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean)
}
