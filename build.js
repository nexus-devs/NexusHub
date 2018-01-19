process.env.NODE_ENV = 'production'
const util = require('util')
const webpack = require('webpack')
const rm = require('rimraf')

// Imitate blitz config object for pulling default webpack config
global.blitz = {
  config: {
    local: {
      environment: 'production'
    },
    view: {
      webpack: {
        clientConfig: `${__dirname}/node_modules/blitz-js-view/config/webpack/client.config.js`,
        serverConfig: `${__dirname}/node_modules/blitz-js-view/config/webpack/server.config.js`
      },
      core: {
        publicPath: `${__dirname}/assets`,
        sourcePath: `${__dirname}/view`
      },
      client: {
        apiUrl: 'https://api.nexus-stats.com',
        authUrl: 'https://auth.nexus-stats.com'
      }
    }
  }
}

// Call webpack build function
async function build() {
  const clientConfig = require(blitz.config.view.webpack.clientConfig)
  const serverConfig = require(blitz.config.view.webpack.serverConfig)

  console.log('* Removing old builds...')
  rm.sync(`${__dirname}/assets/*.bundle.*.js`)
  rm.sync(`${__dirname}/assets/client.*.css`)

  console.log('* Starting webpack build process. This might take a while...')
  const timer = new Date
  const compiled = await util.promisify(webpack)([clientConfig, serverConfig])

  if (compiled.errors) {
    throw compiled.errors
  } else {
    console.log(`> Webpack build successful (${new Date - timer}ms)`)
  }
}
build()