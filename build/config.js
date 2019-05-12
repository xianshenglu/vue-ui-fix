let path = require('path')
let nodeExternals = require('webpack-node-externals')
let Components = require('../components.json')

let externals = {}

Object.keys(Components).forEach(function (key) {
  externals[`element-ui/packages/${key}`] = `element-ui/lib/${key}`
})

externals = [
  Object.assign(
    {
      vue: 'vue'
    },
    externals
  ),
  nodeExternals()
]

exports.externals = externals

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages')
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}
