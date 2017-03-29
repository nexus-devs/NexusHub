'use strict'

const Redis = require('redis')

/**
 * Controls Caching done on Redis
 */
class CacheController {

    /**
     * Creates connection to Redis
     * @param {string} adapter      Adapter name which wants to access the cache
     */
    constructor() {

        /**
         * Create Redis Client
         */
        this.client = Redis.createClient()
    }


    /**
     * Some Logging Functions
     * @param {string} adapter      Adapter name which wants to access the cache
     */
    init() {

    }
}


module.exports = CacheController
