const Endpoint = require(blitz.config[blitz.id].endpointParent)

class Status extends Endpoint {
  constructor(api, db, url) {
    super(api, db, url)
    this.schema.description = "Retrieves upstatus for all known bots."
  }

  async main(req, res) {
    let bots = ["Chat-Sentry", "Player-Sentry"]
    let out = {}

    this.api.subscribe("/warframe/v1/bots/pong")
    this.publish("ping", "/warframe/v1/bots/ping")
    this.api.on("/warframe/v1/bots/pong", bot => {
      if (bots.includes(bot.name)) {
        bots.splice(bots.indexOf(bot.name), 1)
        out[bot.name] = bot
      }
      // All bots responded
      if (bots.length <= 0) {
        this.api.connection.client.off("/warframe/v1/bots/pong")
        res.send(out)
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
        res.send(out)
      }
    }, 1000)
  }
}

module.exports = Status
