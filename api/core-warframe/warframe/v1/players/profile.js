const Endpoint = require(blitz.config[blitz.id].endpointParent)
let status = undefined
let responded = false

/**
 * Returns player profile data
 */
class Profile extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)

    // Modify schema
    this.schema.url = "/warframe/v1/players/:username/profile"
  }


  /**
   * Expect this method to get triggered only if the user isn't cached already
   */
  async main(req, res) {
    const username = req.params.username
    status = await this.api.get('/warframe/v1/bots/status')
    
    if (username.length > 24 || username.length < 1) {
      res.status(404).send({
        error: username + " could not be found.",
        reason: "Usernames can't have less than one or more than 24 characters"
      })
    }

    // Input is Valid
    else {
      res.send(getProfile(username))
    }
  }


  /**
   * Get the player profile from the local db
   */
  async getProfile(username, res) {
    username = username.split(" ").join("") // trailing spaces
    let result = await this.db.collection("players").findOne({
      name: new RegExp("^" + username.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + "$", "i")
    })

    // User saved? Return cached data if younger than 24h
    if (result) {
      delete result._id
      if (new Date - result.updatedAt < 86400000) {
        return result
      } else {
        responded = true
        this.updateProfile(username, res)
        return result
      }
    } else {
      return this.updateProfile(username, res)
    }
  }


  /**
   * Instruct bot to renew given player profile
   */
  async updateProfile(username, res) {

    // Check if Bot is alive
    let result = await status.main()
    if (!result["Player-Sentry"].online) {
      return {
        error: username + " could not be found.",
        reason: "All bots are currently offline."
      }
    }

    // Query user if older than 24h or doesn't exist yet
    else {
      let playerURL = "/warframe/v1/players/" + username.toLowerCase() + "/profile"
      let botURL = "/warframe/v1/bots/getProfile"
      this.api.subscribe(playerURL)
      this.publish(username, botURL)

      return new Promise(resolve => {
        this.api.connection.client.once(playerURL, player => {
          if (player.mastery) {
            return player
          } else {
            let response = {
              error: username + " could not be found.",
              reason: "Could not find user in-game."
            }
            !responded ? this.cache(response, 10) : null
            res.status(404).send(response)
          }
        })
      })
    }
  }
}

module.exports = Profile