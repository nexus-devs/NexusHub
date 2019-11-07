/**
 * Utility functions
 */

export default {
  // Parses a numeric price into gold, silver, copper
  parsePrice (price) {
    const gold = Math.floor(price / 10000)
    const silver = Math.floor(price / 100 - gold * 100)
    const copper = price - gold * 10000 - silver * 100
    return { gold, silver, copper }
  },

  // Pushes url with correct region + server
  pushUrl (self, url) {
    const routeArgs = url.split('/')

    // TODO: Find a way to automate this
    const endpoints = ['items']

    // Insert region and server into route
    if (routeArgs[1] === 'wow-classic' && endpoints.includes(routeArgs[2])) {
      const region = self.$store.state.servers.selectedRegion
      const server = self.$store.state.servers.selectedServer
      if (region !== 'All Regions') {
        routeArgs.splice(3, 0, region.toLowerCase())
        if (server !== 'All Servers') routeArgs.splice(4, 0, this.serverSlug(server))
      }
    }

    self.$router.push(routeArgs.join('/'))
  },

  // Changes server name to server slug
  serverSlug (server) {
    return server.toLowerCase().replace(/\s/g, '-').replace(/'/g, '')
  }
}
