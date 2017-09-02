const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Request extends Endpoint {

  constructor(api, db, req) {
    super(api, db, req)
    this.schema.url = "/warframe/v1/requests"
    this.schema.query = [{
        name: 'item',
        default: '',
        description: 'Specifies the item to look up. Returns all items if not specified.'
      },
      {
        name: 'component',
        default: '',
        description: 'Specifies the component to look up. Returns all components if not specified.'
      },
      {
        name: 'limit',
        default: 20,
        description: 'Maximum number of requests to return.'
      }
    ]
  }

  /**
   * Main method which is called by MethoHandler on request
   */
  async main(req, res) {
    const item = req.query.item
    const component = req.query.component
    const limit = req.query.limit

    let data = await this.findLastRequests(item, component, limit)
    this.cache(data, 60)
    res.send(data)
  }

  async findLastRequests(item, component, limit) {
    let query = {
      createdAt: {
        $gte: new Date(0) // new Date() - 1000 * 60 * 60 for last hour
      }
    }
    if (item) {
      query.item = new RegExp("^" + item + "$", "i")
    }
    if (component) {
      query.component = new RegExp("^" + component + "$", "i")
    }
    return await this.db.collection("requests")
                        .find(query)
                        .sort({createdAt: -1})
                        .limit(limit)
                        .toArray()
  }
}

module.exports = Request
