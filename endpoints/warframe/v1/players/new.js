const Endpoint = require(blitz.config[blitz.id].endpointParent)

/**
 * Accepts new entries for recorded player profiles
 */
class Player extends Endpoint {
    constructor(api, db, url) {
        super(api, db, url)

        // Modify schema
        this.schema.method = "POST"
        this.schema.scope = "players-read-write"
    }

    /**
     * Main method which is called by EndpointHandler on request
     */
    async main(player) {

        // See if we're updating or creating new user
        let result = await this.db.collection("players").findOne({
            name: new RegExp("^" + player.name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + "$", "i")
        })

        // Set updatedAt or createdAt accordingly
        if (result) {
            player.updatedAt = new Date
            player.name = result.name
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
        this.publish("/warframe/v1/players/" + player.name.toLowerCase() + "/profile", player)
        return player
    }
}

module.exports = Player
