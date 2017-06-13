"use strict"

/**
 * blitz.js setup
 */
const Blitz = require("blitz-js")({logLevel: "info"})


/**
 * Big useless intro
 */
const intro = require("./config/logger.js")


/**
 * Import hooks
 */
const mongoHooks = require('./hooks/mongo')


/**
 * blitz.js authentication server
 */
const Auth = require("blitz-js-auth")
const authOptions = {
    cores: 1,
    mongoURL: "mongodb://localhost/warframe-nexus",
    exp: "10s"
}
blitz.use(new Auth(authOptions))


/**
 * blitz.js api node
 */
const API = require("blitz-js-api")
const apiOptions = {
    cores: 1,
    mongoURL: "mongodb://localhost/warframe-nexus"
}
blitz.use(new API(apiOptions))


/**
 * blitz.js core node
 */
const Core = require("blitz-js-core")
let coreOptions = {
    cores: 2,
    endpointPath: __dirname + "/endpoints",
    mongoURL: "mongodb://localhost/warframe-nexus"
}
blitz.hook(Core, mongoHooks.mongoVerifyIndices)
blitz.use(new Core(coreOptions))
