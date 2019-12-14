const isProd = cubic.config.local.environment !== 'development'
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const MiniCss = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const getLocalIdent = require('./_getLocalIdent.js')

/**
 * Config is merged with base config which contains common configuration
 * for both server and client bundles
 */
module.exports = merge(baseConfig, {
  name: 'client',

  // Entry point which guides to everything webpack is supposed to bundle
  // Use app so hot-module-reload can overwrite entry for that specific part
  entry: {
    client: path.resolve(`${process.cwd()}/node_modules/cubic-ui/vue/app-client.js`)
  },

  module: {
    rules: [
      {
        test: /(\.s?[a|c]ss|\.css)$/,
        oneOf: [
          // CSS Modules
          {
            resourceQuery: /module/,
            use: (isProd ? [MiniCss.loader] : ['vue-style-loader']).concat([{
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
            use: (isProd ? [MiniCss.loader] : ['vue-style-loader']).concat(['css-loader', 'sass-loader'])
          }
        ]
      },
      // Transpile ES6/7 into older versions for better browser support
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(cubic.config.ui.sourcePath),
          path.resolve(`${process.cwd()}/node_modules/cubic-ui/vue`)
        ]
      }
    ]
  },

  plugins: [
    // This plugins generates `vue-ssr-client-manifest.json` in the
    // output directory.
    new VueSSRClientPlugin(),
    new MiniCss({
      filename: isProd ? '[name].[contenthash].css' : '[name].css',
      chunkFilename: isProd ? '[id].[contenthash].css' : '[id].css'
    })
  ],

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin()
    ]
  }
})
