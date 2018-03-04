module.exports = {
  client: {
    apiUrl: 'https://api.nexus-stats.com',
    authUrl: 'https://auth.nexus-stats.com'
  },
  core: {
    mongoDb: 'nexus-view',
    endpointPath: `${process.cwd()}/ui/endpoints`
  },
  sourcePath: `${process.cwd()}/ui`,
  sitesPath: `${process.cwd()}/ui/sites`
}