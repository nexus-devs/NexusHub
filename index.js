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
const Auth = require("../../blitz/blitz.js-auth/index.js")
const authOptions = {
    mongoURL: "mongodb://localhost/warframe-nexus",
    exp: "10s"
}
blitz.use(new Auth(authOptions))


/**
 * blitz.js api node
 */
const API = require("../../blitz/blitz.js-api/index.js")
const apiOptions = {
    mongoURL: "mongodb://localhost/warframe-nexus"
}
blitz.use(new API(apiOptions))


/**
 * blitz.js core node
 */
const Core = require("../../blitz/blitz.js-core/index.js")
let coreOptions = {
    endpointPath: __dirname + "/endpoints",
    mongoURL: "mongodb://localhost/warframe-nexus"
}
blitz.hook(Core, mongoHooks.mongoVerifyIndices)
blitz.use(new Core(coreOptions))


/**
 * blitz.js view node
 */
const View = require("../../blitz/blitz.js-view/index.js")
let viewOptions = {

}
blitz.use(new View(viewOptions))
