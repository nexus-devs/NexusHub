const WarframeVersion = require("warframe-updates")
const warframeVersion = new WarframeVersion({
    interval: 10000
})
const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Accepts update status from authorized bots. Specifically Redtext by RedworkDE
 */
class Updates extends Endpoint {

    constructor(api, db, url) {
        super(api, db, url)
        this.schema.description = "Get details on the latest Warframe patches."
        this.schema.url = "/warframe/v1/game/updates"
        this.schema.method = "POST"
        this.schema.scope = "post-game-updates"
    }


    /**
     * Main method which is called by EndpointHandler on request
     */
    async main(update) {
        if (update.type === "Redtext") {
            let redtext = update.data.split(/\r?\n/)
            let title = redtext[0].split(" is")[0]
            let version = title.replace(/([^0-9.])/g, "")
            let date = new Date().toISOString()
            let updateData = {
                title: title,
                version: version,
                date: date
            }
            this.cache(this.url, updateData, 0)
            this.publish(this.url, updateData)
            return updateData
        } else {
            return {
                error: "Bad Request.",
                reason: "Update type not recognized (" + update.type + ")."
            }
        }
    }
}

module.exports = Updates
