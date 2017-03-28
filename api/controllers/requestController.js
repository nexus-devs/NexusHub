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
     * Verify Request Validity with cached data from dbs-node
     */
    isValid(req){

    }


    /**
     * Controls Request processing
     * returns {response}
     */
    getResponse(req) {

        // Clear variables from previous request
        this.clear()

        // Assign values to request
        var request = {
            user: req.user,
            verb: req.method,
            resource: req.body.resource,
            method: req.body.method,
            params: req.body.params,
        }

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
