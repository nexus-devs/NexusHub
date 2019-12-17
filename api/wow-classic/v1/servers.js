const Endpoint = require('cubic-api/endpoint')
const TSMRequest = require(`${process.cwd()}/api/lib/tsm-request.js`)

/**
 * Provides a list of available servers
 */
class Servers extends Endpoint {
  constructor (options) {
    super(options)
    this.schema.description = 'Get a list of all servers, grouped by regions.'
    this.schema.url = '/wow-classic/v1/servers'
    this.schema.request = { url: '/wow-classic/v1/servers' }
    this.schema.response = {
      EU: [String],
      US: [String]
    }
  }

  /**
   * Main method which is called by EndpointHandler on request
   */
  async main (req, res) {
    const TSMReq = new TSMRequest({ timeout: 5000 })
    const reqServer = await TSMReq.get('/realms')
    if (!reqServer.success) {
      return res.send(`Could not fetch servers. Error from TSM: ${JSON.stringify(reqServer)}`)
    }

    const servers = reqServer.data
    servers.sort((a, b) => a.name.localeCompare(b.name))

    // Group servers by region and omit faction
    const groupedServers = {}
    for (const server of servers) {
      if (server.faction === 'Horde') continue // Skip to prevent duplicated servers
      if (!groupedServers[server.region]) groupedServers[server.region] = []
      groupedServers[server.region].push(server.name.split('-')[0])
    }

    this.cache(groupedServers, 60)
    res.send(groupedServers)
  }
}

module.exports = Servers
