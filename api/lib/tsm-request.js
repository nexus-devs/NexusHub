const got = require('got')
const fs = require('fs')

/**
 * Small wrapper for making requests to the TSM servers.
 * Handles Oauth2, server timeout etc...
 */
class TSMRequest {
  constructor (options) {
    this.options = {
      ...{
        retries: 5 // Number of retries
      },
      ...options
    }
  }

  /**
   * Initialize TSMRequest
   */
  async init () {
    try {
      // Take env key (from CI for example) over key on system
      this.tsmClientId = process.env.TSM_CLIENT_ID || fs.readFileSync('/run/secrets/tsm-client-id', 'utf-8').trim()
      this.tsmClientSecret = process.env.TSM_CLIENT_SECRET || fs.readFileSync('/run/secrets/tsm-client-secret', 'utf-8').trim()
      await this._refreshToken()
      return true
    } catch (error) {
      if (error.code !== 'ENOENT') throw error // Don't throw error if file simply doesn't exist
      return false
    }
  }

  /**
   * Get oauth2 token from TSM
   */
  async _refreshToken () {
    this.tsmToken = await got.post('https://auth.tradeskillmaster.com/oauth2/token', {
      json: {
        client_id: this.tsmClientId,
        client_secret: this.tsmClientSecret,
        grant_type: 'client_credentials',
        scope: 'app:realm-api app:pricing-api app:pricing-api:scans'
      }
    }).json()
    this.tsmToken.expires_in = Date.now() + this.tsmToken.expires_in * 1000 // Convert to unix timestamp
  }

  /**
   * Makes a GET requests to the TSM servers.
   * Sometimes the TSM servers just timeout for some reason, so we retry a few times.
   */
  async get (api, query, refreshRetry = false) {
    // Refresh if expired
    if (Date.now() >= this.tsmToken.expires_in) {
      await this._refreshToken()
    }

    try {
      return await got(`https://${api}-api.tradeskillmaster.com${query}`, {
        headers: {
          Authorization: `Bearer ${this.tsmToken.access_token}`,
          Accept: 'application/json'
        },
        retry: {
          limit: this.options.retries
        }
      }).json()
    } catch (error) {
      // If access token is expired, refresh it and try again
      if ([401, 467].includes(error.response.statusCode) && !refreshRetry) {
        await this._refreshToken()
        await this.get(api, query, true)
      } else {
        return { success: false, error }
      }
    }
  }
}

module.exports = TSMRequest
