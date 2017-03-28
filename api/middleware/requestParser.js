/**
 * Converts standard URL string into JSON object usable by dbs nodes
 */
class RequestParser {
    parse(req, res, next) {
        let body = req.body
        let json = {}

        // Proper request format?
        if (typeof body === 'string' || body instanceof String) {
            json.original = body

            // Clean up
            body = body.replace("%20", " ")
            body = body.replace("https://", "")
            body = body.replace("http://", "")

            // Slice sub-categories
            body = body.split("/")

            // Base Information
            json.host = body[0] // api.nexus-stats.com
            json.game = body[1] // warframe
            json.version = body [2] // v1/v2

            // Get Method
            let params = body[body.length - 1].split("?")
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
            body.pop()
            body.splice(0, 3)

            // Assign Resource Path
            json.resource = body
            req.body = json
            next()
        }

        // Improper request format
        else next("Invalid Request Format. Please provide a URL string")
    }
}

module.exports = new RequestParser()
