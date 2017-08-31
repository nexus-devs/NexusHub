const isProd = blitz.config.local.environment !== "development"
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractSass = new ExtractTextPlugin({
  filename: "[name].[chunkhash].css",
  disable: !isProd
})

module.exports = {
  extractCSS: isProd ? true : false,
  loaders: isProd ? {
    scss: extractSass.extract({
      use: "!css-loader!sass-loader?"
    })
  } : {},
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ]
}
