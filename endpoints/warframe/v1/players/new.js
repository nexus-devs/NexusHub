'use strict'

const Endpoint = require(blitz.config.core.endpointParent)
const Statistics = require(__dirname + "/../items/statistics.js")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Request extends Endpoint {
    constructor(api, db, url) {
        super(api, db, url)

        // Modify schema
        this.schema.method = "POST"
        this.schema.scope = "root-read-write"
    }

    /**
     * Main method which is called by MethoHandler on request
     */
    main(player) {
        return new Promise((resolve, reject) => {

            // See if we're updating or creating new user
            this.db.collection("players").findOne({
                name: new RegExp("^" + player.name + "$", "i")
            }).then((result) => {

                // Set updatedAt or createdAt accordingly
                if (result) {
                    player.updatedAt = new Date
                } else {
                    player.createdAt = new Date
                    player.updatedAt = new Date
                }

                // Sent user contains data? Save locally
                if (player.mastery) {
                    this.db.collection("players").updateOne({
                        name: player.name
                    }, {
                        $set: player
                    }, {
                        upsert: true
                    })
                }

                // Publish received data either way
                this.publish("/warframe/v1/players/" + player.name + "/profile", player)
            })

            // Save request on db
            //this.db.collection("requests").insertOne(request)
        })
    }
}

module.exports = Request
