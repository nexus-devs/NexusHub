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
     * Calls method with given param Array
     */
     callMethod(options) {
         return new Promise((resolve, reject) => {
             try{
                 let method = new(require(options.file))
                 method.main.apply(null, options.params).then(data => resolve(data))
             } catch(err) {
                 reject()
             }
         })
     }


    /**
     * Generates flat endpoint schema from method tree
     */
    generateEndpointSchema() {

        // Generate File Tree
        let config = []
        config.push(util.inspect(this.getMethodTree('./core/methods/', config), false, null))
        config = _.flattenDeep(config)

        // Cleanup
        let parsed = []

        for(var i = 0; i < config.length; i++) {
            if (typeof config[i] !== "string" && Object.keys(config[i]).length !== 0){
                parsed.push(config[i])
            }
        }

        // Return config to send to api node
        return parsed
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

            // Custom schema values
            let schema = new(require(method.file))(mongodb).schema

            // Routes
            method.route = filename.replace("./core/methods/", "").replace(".js", "")

            if (schema.resources !== false) {
                let url = method.route.split('/')

                // Add each resource to route, then replace original
                schema.resources.forEach(resource => {
                    url.splice((url.length - 1), 0, ':' + resource) // before method, but not -2 because split has empty first el due to route starting with '/'
                })
                method.route = url.join('/')
            }

            // Stringify functions to be preserved on socket.io's emit
            Object.keys(schema.params).map((i) => {
                let param = schema.params[i]
                if (typeof param.default === 'function') {
                    schema.params[i].default = param.default.toString()
                }
            })
            method.params = schema.params

            // Other Modified values
            method.scope = schema.scope
            method.verb = schema.verb
            method.description = schema.description
        }

        return method
    }
}

module.exports = new MethodHandler()
