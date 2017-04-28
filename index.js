"use strict"

/**
 * blitz.js setup
 */
const blitzconfig = { logLevel: "silly" }
const Blitz = require("blitz-js")(blitzconfig)

/**
 * blitz.js api node
 */
const API = require("blitz-js-api")
blitz.use(new API())


/**
 * blitz.js core node
 */
const Core = require("blitz-js-core")
blitz.use(new Core())
