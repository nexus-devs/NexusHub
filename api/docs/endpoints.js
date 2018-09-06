const Endpoint = cubic.nodes.main.core.Endpoint
const path = require('path')
const fs = require('fs')
const endpoints = []

// Ensure there are Endpoint classes for each node
if (!cubic.nodes.warframe) {
  cubic.nodes.warframe = { core: { Endpoint } }
}

function getEndpointTree (filepath) {
  let stats = fs.lstatSync(filepath)

  // Don't include this endpoint
  if (filepath.includes('docs/endpoints')) {
    return
  }

  // Folder
  if (stats.isDirectory()) {
    fs.readdirSync(filepath).map(child => {
      return getEndpointTree(filepath + '/' + child)
    })
  }

  // File -> Set endpoint config
  else {
    let Endpoint = require(filepath.replace('//', '/'))
    let endpoint = new Endpoint().schema

    // Routes
    endpoint.name = path.basename(filepath).replace('.js', '')
    let route = path.resolve(filepath).replace(path.resolve(cubic.config.main.core.endpointPath), '')
      .replace(/\\/g, '/').replace('.js', '')
    endpoint.route = endpoint.url ? endpoint.url : route
    endpoints.push(endpoint)
  }
}
getEndpointTree(path.resolve(__dirname, '../'))

class Endpoints extends Endpoint {
  constructor (api, db, url) {
    super(api, db, url)
    this.schema.description = 'Returns schema for all API endpoints.'
    this.schema.response = {}
  }

  async main (req, res) {
    this.cache(endpoints)
    res.send(endpoints)
  }
}

module.exports = Endpoints
