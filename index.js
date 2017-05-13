"use strict"

/**
 * blitz.js setup
 */
const Blitz = require("blitz-js")({logLevel: "silly"})


/**
 * Big useless intro
 */
const intro = require("./config/logger.js")


/**
 * Import hooks
 */
let mongoHooks = require('./hooks/mongo')


/**
 * blitz.js authentication server
 */
const Auth = require("blitz-js-auth")
const authOptions = {
    mongoURL: "mongodb://localhost/warframe-nexus"
}
blitz.use(new Auth(authOptions))


/**
 * blitz.js api node
 */
const API = require("blitz-js-api")
const apiOptions = {
    mongoURL: "mongodb://localhost/warframe-nexus"
}
blitz.use(new API(apiOptions))


/**
 * blitz.js core node
 */
const Core = require("blitz-js-core")
let coreOptions = {
    endpointPath: __dirname + "/endpoints",
    mongoURL: "mongodb://localhost/warframe-nexus"
}
blitz.hook(Core, mongoHooks.mongoVerifyIndices)
blitz.use(new Core(coreOptions))
