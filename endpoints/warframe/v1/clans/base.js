const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Provides clan data based on accumulated information from player profiles
 */
class Base extends Endpoint {

    constructor(api, db, url) {
        super(api, db, url)
        this.schema.description = "Get clan details for specified clan"
        this.schema.url = "/warframe/v1/clans/:clan"
    }


    /**
     * Main method which is called by EndpointHandler on request
     */
    async main(clan) {
        let players = await this.db.collection('players').find({
            "clan.name": new RegExp("^" + clan + "$", "i")
        }).toArray()

        if (players.length > 0) {
            let clan = {
                name: players[0].clan.name,
                type: players[0].clan.type,
                rank: players[0].clan.rank,
                saved: {
                    count: players.length,
                    members: players
                }
            }
            this.cache(this.url, clan, 10)
            return clan
        } else {
            let res = {
                error: "No data.",
                reason: "No clan data saved for " + clan + "."
            }
            this.cache(this.url, res, 10)
            return res
        }
    }
}

module.exports = Base
