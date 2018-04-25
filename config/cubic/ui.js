module.exports = {
  core: {
    mongoDb: 'nexus-view'
  },
  webpack: {
    clientConfig: `${process.cwd()}/config/webpack/client.config.js`,
    serverConfig: `${process.cwd()}/config/webpack/server.config.js`
  }
}
