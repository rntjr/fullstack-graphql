const path = require('path')

const rootDir = path(__dirname, '..', '..', 'packages', 'server')

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, rootDir, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node'
}
