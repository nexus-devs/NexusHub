const isProd = cubic.config.local.environment !== 'development'
const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const getLocalIdent = require('./_getLocalIdent.js')

/**
 * Config is merged with base config which contains common configuration
 * for both server and client bundles
 */
module.exports = merge(baseConfig, {
  name: 'server',

  // Entry point which guides to everything webpack is supposed to bundle
  entry: `${process.cwd()}/node_modules/cubic-ui/vue/app-server.js`,

  // Let webpack and vue-loader know we're rendering server-sided
  target: 'node',

  // This tells the server bundle to use Node-style exports
  output: {
    libraryTarget: 'commonjs2'
  },

  // Exclude css from server bundles
  module: {
    rules: [
      {
        test: /(\.s?[a|c]ss|\.css)$/,
        oneOf: [
          // CSS Modules
          {
            resourceQuery: /module/,
            use: (isProd ? [] : ['vue-style-loader']).concat([{
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[module]_[local]_[hash:base64:5]',
                  getLocalIdent
                }
              }
            }, 'sass-loader'])
          },
          // Vanilla <style>
          {
            use: (isProd ? [] : ['vue-style-loader']).concat(['css-loader', 'sass-loader'])
          }
        ]
      }
    ]
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
