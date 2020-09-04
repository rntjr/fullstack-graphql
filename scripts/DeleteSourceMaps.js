/* eslint-disable space-before-function-paren */
const path = require('path')
const rimraf = require('rimraf')

export default function deleteSourceMaps() {
  rimraf.sync(path.join(__dirname, '../../app/dist/*.js.map'))
  rimraf.sync(path.join(__dirname, '../../app/*.js.map'))
}
