const request = require('request-promise')
const fs = require('fs')

/**
 * Wrapper for making requests to the TSM servers.
 * Handles TSM API key, server timeout etc...
 */
class TSMRequest {
  constructor (options) {
    this.options = {
      ...{
        timeout: 10000, // 10 seconds
        retries: 5 // Number of retries on timeout
      },
      ...options
    }

    try {
      // Take env key (from CI for example) over key on system
      this.tsmKey = process.env.TSM_API_KEY || fs.readFileSync('/run/secrets/tsm-api-key', 'utf-8').trim()
    } catch (err) {
      if (err.code !== 'ENOENT') throw err // Don't throw error if file simply doesn't exist
    }
  }

  /**
   * Makes a GET requests to the TSM servers.
   * Sometimes the TSM servers just timeout for some reason, so we retry a few times.
   */
  async get (query) {
    let req = {}
    let reqCounter = 0

    while (reqCounter === 0 || req.code === 'ETIMEDOUT') {
      if (reqCounter > this.options.retries) return { success: false, error: 'Request connection timed out.' }
      reqCounter++
      req = await request({
        uri: `http://api2.tradeskillmaster.com${query}`,
        json: true,
        headers: { 'User-Agent': 'Request-Promise', 'X-API-Key': this.tsmKey },
        timeout: this.options.timeout
      })
    }

    return req
  }
}

module.exports = TSMRequest
