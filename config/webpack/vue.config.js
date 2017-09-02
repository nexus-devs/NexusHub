const isProd = blitz.config.local.environment !== "development"

module.exports = (extractSass) => {
  return {
    extractCSS: isProd,
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
}
