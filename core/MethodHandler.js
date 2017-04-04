/**
 * Module Dependencies
 */
const fs = require('fs')
const path = require('path')
const util = require('util')
const _ = require('lodash')


/**
 * Mongodb connection for methods
 */
let mongodb = require('mongoose')
mongodb.connect('mongodb://localhost/nexus-stats')


/**
 * Interface for handling methods
 */
class MethodHandler {

    /**
     * Generates flat endpoint schema from method tree
     */
    generateConfig() {

        // Generate File Tree
        let config = []
        config.push(util.inspect(this.getMethodTree('./core/methods/', config), false, null))
        config = _.flattenDeep(config)

        // Cleanup (last 2 el always garbage (first due to empty initial folder, second makes no sense))
        config.splice(config.length - 2, 2)

        // Return config to send to api node
        return config
    }


    /**
     * Generates endpoint tree
     */
    getMethodTree(filename, config) {
        let stats = fs.lstatSync(filename)
        let method = {}

        // Folder
        if (stats.isDirectory()) {
            config.push(fs.readdirSync(filename).map((child) => {
                return this.getMethodTree(filename + '/' + child, config)
            }))
        }

        // File -> Set method config
        else {

            // Basic File information
            method.file = filename.replace("//", "/").replace("./core/", "./")
            method.method = path.basename(filename).replace(".js", "")
            method.route = filename.replace("./core/methods/", "").replace(".js", "")

            // Custom schema values
            let schema = new(require(method.file))(mongodb).schema

            // Routes
            if (schema.resources !== false) {
                let url = method.route.split('/')

                // Add each resource to route, then replace original
                schema.resources.forEach(resource => {
                    url.splice((url.length - 1), 0, ':' + resource) // before method, but not -2 because split has empty first el due to route starting with '/'
                })

                method.route = url.join('/')
            }

            // Params
            method.params = schema.params

            // Authentication scope
            method.scope = schema.scope

            // Endpoint description
            method.description = schema.description
        }

        return method
    }
}

module.exports = new MethodHandler()
