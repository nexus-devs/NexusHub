const Endpoint = require(blitz.config[blitz.id].endpointParent)
const Status = require(__dirname + "/../bots/status.js")
let status = undefined
let responded = false

/**
 * Returns player profile data
 */
class Profile extends Endpoint {

  constructor(api, db, url) {
    super(api, db, url)
    status = new Status(api, db, "/warframe/v1/bots/status")

    // Modify schema
    this.schema.url = "/warframe/v1/players/:username/profile"
  }


  /**
   * Expect this method to get triggered only if the user isn't cached already
   */
  async main(username) {
    if (username.length > 24 || username.length < 1) {
      return {
        error: username + " could not be found.",
        reason: "Usernames can't have less than one or more than 24 characters"
      }
    }

    // Input is Valid
    else {
      return this.getProfile(username)
    }
  }


  /**
   * Get the player profile from the local db
   */
  async getProfile(username, resolve, reject) {
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
        this.updateProfile(username)
        return result
      }
    } else {
      return this.updateProfile(username)
    }
  }


  /**
   * Instruct bot to renew given player profile
   */
  async updateProfile(username, resolve, reject) {

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
      this.publish(botURL, username)

      return new Promise(resolve => {
        this.api.connection.client.once(playerURL, player => {
          if (player.mastery) {
            resolve(player)
          } else {
            let res = {
              error: username + " could not be found.",
              reason: "Could not find user in-game."
            }
            !responded ? this.cache(this.url, res, 10) : null
            resolve(res)
          }
        })
      })
    }
  }
}

module.exports = Profile
