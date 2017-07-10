'use strict'

const Endpoint = require(blitz.config.core.endpointParent)
const Status = require(__dirname + "/../bots/status.js")
let status = undefined

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Request extends Endpoint {
    constructor(api, db, url) {
        super(api, db, url)
        status = new Status(api, db, "/warframe/v1/bots/status")

        // Modify schema
        this.schema.url = "/warframe/v1/players/:username/profile"
    }

    /**
     * Expect this method to only get triggered if user isn't saved already
     */
    main(username) {
        return new Promise((resolve, reject) => {
            if (username.length > 24) {
                resolve({
                    error: username + " could not be found.",
                    reason: "Usernames can't have more than 24 characters"
                })
            }

            // Input is Valid
            else {
                this.db.collection("players").findOne({
                    name: new RegExp("^" + username.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + "$", "i")
                }).then((result) => {

                    // User saved? Return cached data if younger than 24h
                    if (result) {
                        delete result._id
                        if (new Date - result.updatedAt < 86400000) {
                            return resolve(result)
                        } else {
                            resolve(result)
                        }
                    }

                    // Check if Bot is alive
                    status.main().then(result => {
                        if (!result["Player-Sentry"].online) {
                            return resolve({
                                error: username + " could not be found.",
                                reason: "All bots are currently offline."
                            })
                        }

                        // Query user if older than 24h or doesn't exist yet
                        else {
                            let playerURL = "/warframe/v1/players/" + username.toLowerCase() + "/profile"
                            let botURL = "/warframe/v1/bots/getProfile"

                            this.api.subscribe(playerURL)
                            this.publish(botURL, username)

                            this.api.connection.client.once(playerURL, player => {
                                if (player.mastery) {
                                    resolve(player)
                                } else {
                                    let res = {
                                        error: username + " could not be found.",
                                        reason: "Could not find user in-game."
                                    }
                                    this.cache(this.url, res, 60)
                                    resolve(res)
                                }
                            })
                        }
                    })
                })
            }
        })
    }
}

module.exports = Request
