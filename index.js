"use strict"

/**
 * blitz.js setup
 */
const blitzConfig = { logLevel: "silly" }
const Blitz = require("blitz-js")(blitzConfig)


/**
 * Big useless intro
 */
const intro = require("./config/logger.js")


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
    mongoURL: "mongodb://localhost/nexus-stats"
}
blitz.use(new Core(coreOptions))
