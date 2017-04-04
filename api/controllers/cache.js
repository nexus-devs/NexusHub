'use strict'

const Redis = require('redis')

/**
 * Controls Caching done on Redis
 */
class CacheController {

    /**
     * Creates connection to Redis
     */
    constructor() {

        /**
         * Create Redis Client
         */
        this.client = Redis.createClient()
    }
}


module.exports = CacheController
