const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config')

const rootDir = path.resolve(__dirname, '..', '..')
const rootPath = path.resolve(rootDir, 'packages', 'web')

module.exports = merge(common, {
  mode: 'production',
  entry: [path.join(rootPath, 'src', 'index.tsx')],
  target: 'web',
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  output: {
    filename: 'web.js',
    path: path.join(rootDir, 'dist', 'web')
  }
})
