const Endpoint = require('cubic-api/endpoint')
const request = require('request-promise')
const fs = require('fs')
const tsmKey = process.env.TSM_API_KEY || fs.readFileSync('/run/secrets/tsm-api-key', 'utf-8').trim()

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
    const reqServer = await request({
      uri: 'http://api2.tradeskillmaster.com/realms',
      json: true,
      headers: { 'User-Agent': 'Request-Promise', 'X-API-Key': tsmKey }
    })
    if (!reqServer.success) {
      return res.send(`Could not fetch servers. Error from TSM: ${reqServer.error}`)
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
