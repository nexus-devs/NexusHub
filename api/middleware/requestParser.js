'use strict'

/**
 * Converts standard URL string into JSON object usable by dbs nodes
 */
class RequestParser {
    parse(req, res, next) {
        let url = req.url
        let json = {}

        // Proper request format?
        if (typeof url === 'string' || url instanceof String) {
            json.original = url

            // Clean up
            url = url.replace("%20", " ")
            url = url.replace("https://", "")
            url = url.replace("http://", "")

            // Slice sub-categories
            url = url.split("/")

            // Base Information
            json.host = url[0] // api.nexus-stats.com
            json.game = url[1] // warframe, dota2, ...
            json.version = url [2] // v1/v2...

            // Get Method
            let params = url[url.length - 1].split("?")
            json.method = params[0]
            json.params = {}

            // Get Query from rest of query string
            if (params.length > 1) {
                params.splice(0, 1)
                params = params[0].split("&")

                // Assign left/right value of param to individual key
                for (var i = 0; i < params.length; i++) {
                    let val = params[i].split("=")
                    json.params[val[0]] = val[1]
                }
            }

            // Remove already-assigned data
            url.pop()
            url.splice(0, 3)

            // Assign Resource Path
            json.resource = url
            req.parsed = json
            next()
        }

        // Improper request format
        else {
            cli.log(process.env.api_id, 'neutral', cli.getPrefix("Parser", cli.service_max) + req.user.uid + ' Invalid Request Format: ' + url, 'out')
            next("Invalid Request Format. Please provide a URL string")
        }
    }
}

module.exports = new RequestParser()
