'use strict'

const Endpoint = require(blitz.config.core.endpointParent)

/**
 * Retrieves upstatus for all known bots
 */
 class Status extends Endpoint {

     constructor(api, db, url) {
         super(api, db, url)
         this.schema.description = "Returns the status of all bots."
     }

    main() {
        return new Promise((resolve, reject) => {
            let bots = ["Chat-Sentry", "Player-Sentry"]
            let out = {}

            this.api.subscribe("/warframe/v1/bots/pong")
            this.publish("/warframe/v1/bots/ping", "ping")
            this.api.on("/warframe/v1/bots/pong", bot => {
                if (bots.includes(bot.name)) {
                    bots.splice(bots.indexOf(bot.name), 1)
                    out[bot.name] = bot
                }
                // All bots responded
                if (bots.length <= 0) {
                    this.api.connection.client.off("/warframe/v1/bots/pong")
                    resolve(out)
                }
            })

            // Timeout until bot is declared dead
            setTimeout(() => {
                if (bots.length > 0) {
                    bots.forEach(bot => {
                        out[bot] = {
                            name: bot,
                            online: false
                        }
                    })
                    this.api.connection.client.off("/warframe/v1/bots/pong")
                    resolve(out)
                }
            }, 1000)
        })
     }
 }

module.exports = Status
