module.exports = {
  // https://webpack.js.org/configuration/resolve/
  chainWebpack: config => config.resolve.set('symlinks', false)
}
