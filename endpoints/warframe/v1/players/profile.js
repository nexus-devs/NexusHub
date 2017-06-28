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
        this.schema.url = "/warframe/v1/players/:username/profile"
    }

    /**
     * Expect this method to only get triggered if user isn't saved already
     */
    main(username) {
        return new Promise((resolve, reject) => {
            if (username.length > 16) {
                reject("Username can't have more than 16 characters.")
            } else {
                this.db.collection("players").findOne({
                    name: new RegExp("^" + username + "$", "i")
                }).then((result) => {

                    // User saved? Return cached data if younger than 24h
                    if (result) {
                        if (new Date - result.createdAt < 86400000) {
                            return resolve(result)
                        } else {
                            resolve(result)
                        }
                    }

                    // Query user if older than 24h or doesn't exist yet
                    let playerURL = "/warframe/v1/players/" + username + "/profile"
                    let botURL = "/warframe/v1/bots/getProfile"

                    this.api.subscribe(playerURL)
                    this.publish(botURL, username)

                    this.api.on(playerURL, player => {
                        this.api.connection.client.off(playerURL)
                        player.mastery ? resolve(player) : reject(username + " could not be found.")
                    })
                })
            }
        })
    }
}

module.exports = Request
