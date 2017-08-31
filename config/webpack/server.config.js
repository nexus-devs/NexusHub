const merge = require("webpack-merge")
const baseConfig = require("./base.config.js")
const nodeExternals = require("webpack-node-externals")
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin")

/**
 * Config is merged with base config which contains common configuration
 * for both server and client bundles
 */
module.exports = merge(baseConfig, {
  name: "server",

  // Entry point which guides to everything webpack is supposed to bundle
  entry: __dirname + "/../../view/src/vue/app-server.js",

  // Let webpack and vue-loader know we're rendering server-sided
  target: "node",

  // For bundle renderer source map support
  devtool: "source-map",

  // This tells the server bundle to use Node-style exports
  output: {
    path: blitz.config[blitz.id].publicPath,
    libraryTarget: "commonjs2"
  },

  // Ignore node_modules, making the build much faster
  externals: nodeExternals(),

  // This is the plugin that turns the entire output of the server build
  // into a single JSON file. The default file name will be
  // `vue-ssr-server-bundle.json`
  plugins: [
    new VueSSRServerPlugin()
  ]
})
