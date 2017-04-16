'use strict'

/**
 * Converts standard URL string into JSON object usable by dbs nodes
 */
class RequestParser {

    /**
     * Convert URL into JSON
     */
    parse(req, res, next) {

        // Proper request format?
        if (typeof req.url === 'string' || req.url instanceof String) {
            this.process(req, res, next)
        }

        // Improper request format
        else {
            next("Invalid Request Format. Please provide a URL string")
        }
    }


    /**
     * Actual Parsing Logic
     */
    process(req, res, next) {
        let url = req.url
        let json = {}
        json.original = url

        // Clean up
        url = url.replace("%20", " ")
        url = url.replace("https://", "")
        url = url.replace("http://", "")

        // Slice sub-categories
        url = url.split("/")

        // Base Information
        this.getBase(json, url)

        // Get Method
        this.getMethod(json, url)

        // Remove already-assigned data
        url.pop()
        url.splice(0, 3)

        // Assign Resource Path
        json.resource = url
        req.parsed = json
        next()
    }


    /**
     * Get Base Information out of URL
     */
    getBase(json, url) {
        json.host = url[0] // api.nexus-stats.com
        json.game = url[1] // warframe, dota2, ...
        json.version = url[2] // v1/v2...
    }


    /**
     * Get Method & params from rest of URL
     */
    getMethod(json, url) {
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
    }
}

module.exports = new RequestParser()
