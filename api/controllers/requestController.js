/**
 * Load endpoint resources
 */
const endpoints = {
    items: require('../config/endpoints/resources/items.js'),
}


/**
 * Checks request against endpoints given by dbs node
 */
class RequestController {

    constructor() {

        /**
         * Endpoint for current request
         */
        this.endpoint;

        /**
         * Requested query
         */
        this.query;
    }

    /**
     * Set Client to send request to dbs node
     */
    setClient(client) {
        this.client = client
    }


    /**
     * Matches Request against endpoint schemas
     * returns {bool}
     */
    isValid(request) {
        if (!this.isValidResource(request.resource)) return false
        if (!this.isValidQuery(request.query, request.params)) return false

        // Request found in endpoints
        return true
    }


    /**
     * Checks resource request against endpoints
     */
    isValidResource(resource) {
        if (typeof resource !== 'undefined') {

            // Loop through endpoints
            for (var endpoint in endpoints) {

                // Match endpoint in request with those specified
                resource.some(resourceEl => {
                    if (resourceEl === endpoint) {
                        this.setEndpoint(endpoints[endpoint])
                        this.validEndpoint = true
                        return true
                    }
                })

                if (this.validEndpoint) return true
            }
        }
        return false
    }


    /**
     * Checks request query against defined values in endpoints/*.js
     */
    isValidQuery(query, params) {
        if (typeof query !== 'undefined') {

            // Loop through defined queries in given endpoint
            for (var querystr in this.endpoint) {

                // Check if query name is in given endpoint
                if (query === querystr) {
                    this.query = this.endpoint[query]
                    this.isValidParams(params)
                    if (this.validParams !== false) return true
                }
            }
        }

        return false
    }


    /**
     * Checks request params against required type in endpoints/*.js
     */
    isValidParams(params) {

        // Check if required params are valid
        for (var param in this.query.attributes) {

            // Assign Param Values
            var paramstr = param
            param = this.query.attributes[param]

            // If param required: Match with requested params
            if (param.required) {

                // Check if params are given and compare data types
                if (Object.keys(params).length !== 0) {
                    for (var requestparam in params) {
                        if (typeof requestparam != param.type || requestparam !== paramstr) {
                            this.validParams = false
                        }
                    }

                } else {
                    this.validParams = false
                }
            }
        }
    }


    /**
     * Sets local endpoint
     */
    setEndpoint(endpoint) {
        this.endpoint = endpoint
    }


    /**
     * Controls Request processing
     * returns {response}
     */
    getResponse(request) {

        // Clear variables from previous request
        this.clear()

        // Verify request matches schema
        if (this.isValid(request)) {

            // socketAdapter.req(this.request) //
            return ({
                statusCode: 200,
                body: 'Data will be here soon ' + Math.random()*100 // Differentiate output for mutiple hundreds of requests
            })
        }

        return ({
            statusCode: 405,
            body: 'Invalid Request. Refer to api.nexus-stats.com for documentation.'
        })
    }


    /**
     * Clear variables after req
     */
    clear() {
        this.validEndpoint = undefined
        this.validParams = undefined
    }
}

module.exports = RequestController
