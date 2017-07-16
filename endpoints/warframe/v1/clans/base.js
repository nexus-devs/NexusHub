'use strict'

const Endpoint = require(blitz.config.core.endpointParent)

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
    main(clan) {
        return new Promise((resolve, reject) => {
            this.db.collection('players').find({
                "clan.name": new RegExp("^" + clan + "$", "i")
            }).toArray().then((players) => {
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
                    this.cache(this.url, clan, 60)
                    resolve(clan)
                } else {
                    this.cache(this.url, {
                        error: "No clan data saved for " + clan + "."
                    }, 60)
                    resolve({
                        error: "No clan data saved for " + clan + "."
                    })
                }
            })
        })
    }
}

module.exports = Base
