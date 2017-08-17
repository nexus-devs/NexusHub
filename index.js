/**
 * blitz.js setup
 */
const epoch = new Date
const Blitz = require("blitz-js")({logLevel: "monitor"})


/**
 * Big useless intro
 */
const intro = require("./config/logger.js")
const switchContext = async () => {
    await blitz.pingAll(blitz.nodes.view.workers)
    console.log(" ")
    console.log(`:: blitz.js stack ready in ${(new Date - epoch) / 1000}s`)
    console.log(intro.border)
    console.log(" ")
    if (blitz.config.local.environment === "development") {
        await blitz.setWorkerConfig("blitz.config.local.logLevel = 'info'")
        blitz.config.local.logLevel = "info"
    }
}


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
 blitz.hook(Core, resourceHooks.verifyItemIndices)
 blitz.use(new Core({
     endpointPath: __dirname + "/api/endpoints",
     mongoURL: "mongodb://localhost/warframe-nexus-core",
 }))


/**
 * View node for rendering webpages
 */
const View = require("blitz-js-view")
blitz.use(new View({
    mongoURL: "mongodb://localhost/warframe-nexus-view",
    //endpointPath: __dirname + "/view/endpoints",
    //sourcePath: __dirname + "/view/src",
    //publicPath: __dirname + "/view/public"
}))

switchContext()
