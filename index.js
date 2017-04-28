"use strict"

/**
 * blitz.js setup
 */
const blitzconfig = { logLevel: "silly" }
const Blitz = require("blitz-js")(blitzconfig)


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
let core_options = {
    endpointPath: __dirname + "/endpoints"
}
blitz.use(new Core(core_options))
