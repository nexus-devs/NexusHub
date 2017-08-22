const WarframeVersion = require("warframe-updates")
const warframeVersion = new WarframeVersion({
  interval: 10000
})
const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Monitors Warframe's WorldState for updates
 */
class Updates extends Endpoint {

    constructor(api, db, url) {
        super(api, db, url)
        this.schema.description = "Get details on the latest Warframe patches."
        this.schema.url = "/warframe/v1/game/updates"
    }


    /**
     * Main method which is called by EndpointHandler on request
     */
    async main() {
        return {
            error: "No data.",
            reason: "Could not find cached update data."
        }
    }


    /**
     * Keep checking worldstate for updates
     */
    monitor() {
        warframeVersion.off("update") // Remove previous listeners from uncached calls
        warframeVersion.on("update", update => {
            this.cache(this.url, update)
            this.publish(this.url, update)
        })
    }
}

module.exports = Updates
