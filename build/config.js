let path = require('path')
let nodeExternals = require('webpack-node-externals')

exports.externals = [nodeExternals()]

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages')
}

exports.jsexclude = /node_modules/
