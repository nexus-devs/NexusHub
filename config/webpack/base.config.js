const isProd = blitz.config.local.environment !== "development"
const fs = require('fs')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractSass = new ExtractTextPlugin({
  filename: "[name].[chunkhash].css",
  disable: !isProd
})
const vueConfig = require('./vue.config.js')(extractSass)

// Actual config
module.exports = {

  // Output file which will be loaded by Vue (server & client side)
  output: {
    path: blitz.config.view.core.publicPath,
    publicPath: "/",
    filename: isProd ? "[name].bundle.[hash].js" : "[name].bundle.js"
  },

  // Loaders which determine how file types are interpreted
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s?[a|c]ss$/,
        use: isProd ? extractSass.extract({
          use: [{
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        }) : "sass-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
                quality: 100
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: 50 - 70,
                speed: 3
              }
            }
          }
        ]
      }
    ]
  },

  // Change how modules are resolved. (Places to look in, alias, etc)
  resolve: {
    // Resolve dependencies differently when in debug due to source code folder
    // being different from current working directory
    alias: {
      src: blitz.config.view.core.sourcePath,
      public: blitz.config.view.core.publicPath,
    }
  },

  // Plugins for post-bundle operations
  plugins: [
    extractSass
  ]
}
