"use strict"

/**
 * blitz.js setup
 */
const Blitz = require("blitz-js")({logLevel: "verbose"})


/**
 * Big useless intro
 */
const intro = require("./config/logger.js")


/**
 * Import hooks
 */
const resourceHooks = require('./hooks/mongo')


/**
 * Authentication Server for incoming api connections
 */
const Auth = require("blitz-js-auth")
blitz.use(new Auth({
    mongoURL: "mongodb://localhost/warframe-nexus-auth"
}))


/**
 * API Server for resource nodes
 */
const API = require("blitz-js-api")
blitz.use(new API({
    mongoURL: "mongodb://localhost/warframe-nexus-core",
}))


/**
 * Resource worker which serves data to the API
 */
 const Core = require("blitz-js-core")
 blitz.hook(Core, resourceHooks.mongoVerifyIndices)
 blitz.use(new Core({
     endpointPath: __dirname + "/endpoints",
     mongoURL: "mongodb://localhost/warframe-nexus-core",
 }))
