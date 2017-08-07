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
blitz.nodes.api.get("/", (req, res, next) => res.send("Documentation can be found at https://drive.google.com/open?id=16rbyQAG1cgQhwfFfXcHqn-o8txZ5dAZBf4hzr3VeJJE. I'm too busy to hook a web server for docs right now. Sorry :>"))

/**
 * Resource worker which serves data to the API
 */
 const Core = require("blitz-js-core")
 blitz.hook(Core, resourceHooks.mongoVerifyIndices)
 blitz.use(new Core({
     endpointPath: __dirname + "/endpoints",
     mongoURL: "mongodb://localhost/warframe-nexus-core",
 }))
