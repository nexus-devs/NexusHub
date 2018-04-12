module.exports = {
  api: {
    group: 'warframe',
    port: 3004
  },
  core: {
    endpointPath: `${process.cwd()}/api/warframe`,
    apiUrl: 'http://localhost:3004',
    baseUrl: '/warframe',
    mongoDb: 'nexus-warframe',
    group: 'warframe'
  }
}