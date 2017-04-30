"use strict"

/**
 * blitz.js setup
 */
const Blitz = require("blitz-js")()


/**
 * Big useless intro
 */
const intro = require("./config/logger.js")


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
blitz.use(new API())


/**
 * blitz.js core node
 */
const Core = require("blitz-js-core")
let coreOptions = {
    endpointPath: __dirname + "/endpoints",
    mongoURL: "mongodb://localhost/warframe-nexus"
}
blitz.use(new Core(coreOptions))
