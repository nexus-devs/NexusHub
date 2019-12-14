const Client = require('cubic-client')
const client = new Client({
  user_key: 'test',
  user_secret: 'test',
  schema: {
    endpoints: [{}],
    maxPending: 0
  }
})
const chalk = require('chalk')
const Assert = require('assert')
const assert = (condition, key, expected) => {
  try {
    Assert(condition())
  } catch (err) {
    throw new Error(`Assertion error at { ${key} }: ${expected}`)
  }
}

/**
 * Performs tests based on endpoint's schemas
 */
class EndpointParser {
  constructor () {
    this.client = client
  }

  async verifyEndpoint (endpoint) {
    const request = this.getRequest(endpoint)

    // Modify request.url to use appropriate url/body object for cubic-client query
    if (request.verb !== 'GET') {
      request.url = {
        url: request.url,
        body: request.body
      }
    }
    const response = await client.query(request.verb, request.url)
    try {
      this.debug = ''
      return this.traverseResponse(response, endpoint.response, 'response')
    } catch (err) {
      this.debug = this.debug.replace('√', '') // avoid checkmark on whitespace
      console.log(`\n\n${err.message}:`, this.debug, '\n')
      throw err.message
    }
  }

  /**
   * Generate full expected request object with all implicit attributes present.
   * That includes verb, url, body as opposed to just the url for shortcuts.
   */
  getRequest (endpoint) {
    if (!endpoint.request) {
      return {
        verb: endpoint.method,
        url: endpoint.route,
        body: undefined
      }
    }
    return {
      verb: endpoint.request.verb || endpoint.method,
      url: endpoint.request.url || (typeof endpoint.request === 'string' ? endpoint.request : false) || endpoint.route,
      body: endpoint.request.body
    }
  }

  /**
   * Generate full expected response object with all implicit attributes present.
   * That includes _type, _value, _description as opposed to just the _value.
   * The _ prefix for each key indicates that the value is assigned by us and
   * not part of the actual response object.
   */
  traverseResponse (response, endpoint, key) {
    // log object trace when an unhandled error is thrown
    const oldlogs = this.debug.split('\n')
    oldlogs[oldlogs.length - 1] = chalk.grey(chalk.green('    √ ') + oldlogs[oldlogs.length - 1].replace('<- failed', ''))
    this.debug = oldlogs.join('\n')
    this.debug += `\n${key} ${chalk.red('<- failed')}`

    // Is array -> assume default object in first index
    if (endpoint instanceof Array) {
      assert(() => response instanceof Array, key, `should be type Array, was ${typeof response}`)
      this.traverseResponse(response[0], endpoint[0], `${key}[0]`)
    }

    // Validate schema types
    else if (endpoint === String) {
      assert(() => typeof response === 'string', key, `should be type string, was ${typeof response}`)
    }
    else if (endpoint === Number) {
      assert(() => typeof response === 'number' || response === null, key, `should be type number, was ${typeof response}`)
    }
    else if (endpoint === Boolean) {
      assert(() => typeof response === 'boolean', key, `should be type boolean, was ${typeof response}`)
    }

    else if (endpoint instanceof Object) {
      // 'End' of object with custom test values
      if (endpoint._type || endpoint._value) {
        if (endpoint._type === String) endpoint._type = 'string'
        if (endpoint._type === Number) endpoint._type = 'number'
        if (endpoint._type === Boolean) endpoint._type = 'boolean'
        if (endpoint._value) {
          assert(() => response === endpoint._value, key, `should have value ${endpoint._value}, was ${response}`)
        } else {
          const type = endpoint._type || typeof endpoint._value
          response = response === null ? 0 : response // `null` should pass Number check
          assert(() => typeof response === type, key, `should be type ${type}, was ${typeof response}`)
        }
      }
      // Normal nested object - keep traversing
      else {
        for (const skey in endpoint) {
          this.traverseResponse(response[skey], endpoint[skey], `${key}.${skey}`)
        }
      }
    }

    else if (endpoint) {
      assert(() => response === endpoint, key, `should have value ${endpoint}, was ${response}`)
    }
  }
}

module.exports = new EndpointParser()
