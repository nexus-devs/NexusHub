module.exports = {
  api: {
    group: 'main',
  },
  core: {
    endpointPath: `${process.cwd()}/api/`,
    endpointPathExclude: /\/warframe/,
    mongoDb: 'nexus-main',
    group: 'main'
  }
}