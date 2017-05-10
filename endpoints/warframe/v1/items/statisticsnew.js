'use strict'

const Method = require(blitz.config.core.endpointParent)
const _ = require("lodash")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Statistics extends Method {
    /**
     * Creates a new statistics call
     * @constructor
     */
    constructor() {
        super()

        /**
         * Schema description
         * @type {string}
         */
        this.schema.description = "Get item statistics between a specified time frame."

        /**
         * Schema resources
         * @type {string[]}
         */
        this.schema.resources = ["item"]

        /**
         * Schema parameters
         * @type {Array.<string, string, *, boolean, string>}
         */
        this.schema.params = [{
                name: "component",
                type: "string",
                default: "",
                required: true,
                description: "Specifies item component to look up. No component returns full set data."
            },
            {
                name: "timestart",
                type: "number",
                default: () => {
                    return new Date().getTime() // current time
                },
                description: "Returns data recorded between timestart and timeend."
            },
            {
                name: "timeend",
                type: "number",
                default: () => {
                    return new Date(new Date().setDate(new Date().getDate() - 7)).getTime() // 1 weeks ago
                },
                description: "Returns data recorded between timestart and timeend."
            },
            {
                name: "interval",
                type: "number",
                default: 7,
                description: "Intervals to split the time in."
            }
        ]
    }


    /**
     * Main method which is called by MethodHandler on request
     */
    main(item, component, timestart, timeend, interval) {
        return new Promise((resolve, reject) => {

            // Generate valid Query from input
            let query = this.generateQuery(item, component, timestart, timeend)

            // Get requests from mongodb
            this.db.collection('requests').find(query).toArray()

                // Purge, generate statistics, resolve
                .then(result => this.magic(query, interval, result))
                .then(doc => resolve(doc))
        })
    }


    /**
     * Generate query from given params
     */
    generateQuery(item, component, timestart, timeend) {

        // Use same case pattern as requests
        item = this.title(item)
        component = this.title(component)

        // Query object
        let query = {
            item: item,
            createdAt: {
                $gte: new Date(timeend),
                $lte: new Date(timestart)
            }
        }

        // Append component if one is given
        if (component !== "") query.component = component

        return query
    }


    /**
     * Magic happens here
     */
    magic(query, interval, result) {

        // Document to return
        let doc = {
            title: query.item,
            supply: {
                count: 0,
                percentage: 0
            },
            demand: {
                count: 0,
                percentage: 0
            },
            ignore: 0,
            components: []
        }

        // Accumulate data from all requests
        this.accumulate(query, interval, result, doc)

        // Calculate Statistics from accumulated values
        this.process(doc)

        // Return document
        return doc
    }


    /**
     * Accumulate data from requests
     */
    accumulate(query, interval, result, doc) {

        // Time window
        let timestart = query.createdAt.$lte.getTime()
        let timeend = query.createdAt.$gte.getTime()

        // Get Interval size
        let intervalSize = (timestart - timeend) / interval

        // Accumulate data for each request
        result.forEach(request => {
            let component = this.getComponent(doc, request, interval)

            // Find which interval the request is located in
            let i = Math.floor((request.createdAt.getTime() - timeend) / intervalSize)
            let intvl = component.interval[i]

            // Request has price?
            let price = request.price
            if (price) {

                // Add to median array
                component.median.push(price)

                // Calculate avg, min, max
                intvl.avg += price

                // New min/max?
                if (price < intvl.min) intvl.min = price
                if (price > intvl.max) intvl.max = price
            }

            // No Price
            else ++intvl.ignore

            // Determine Offer Type
            if (request.offer === "Selling") ++intvl.supply.count
            else ++intvl.demand.count

            // Set Modified Interval in output doc
            let index = doc.components.findIndex(comp => comp.name == request.component)
            doc.components[index].interval[i] = intvl
        })
    }


    /**
     * Add missing component to output document and return
     */
    getComponent(doc, request, interval) {
        let index = doc.components.findIndex(comp => comp.name == request.component)
        let component = doc.components[index]

        // Component wasn't in doc => add
        if (!component) {
            component = {
                name: request.component,
                avg: 0,
                median: [],
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
                supply: {
                    count: 0,
                    percentage: 0
                },
                demand: {
                    count: 0,
                    percentage: 0
                },
                ignore: 0,
                interval: []
            }

            // Fill interval array
            for (let j = 0; j < interval; j++) {
                let intervalObj = { // Helper obj for field creation
                    avg: 0,
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY,
                    supply: {
                        count: 0,
                        percentage: 0
                    },
                    demand: {
                        count: 0,
                        percentage: 0
                    },
                    ignore: 0
                }

                component.interval.push(intervalObj)
            }

            // Push to original doc
            doc.components.push(component)
        }

        return component
    }


    // Loop through intervals
    process(doc) {
        let offerCount = 0

        doc.components.forEach((component, i) => {
            component.interval.forEach((intvl, j) => {

                // Calculate avg and supply/demand percentages
                offerCount = intvl.supply.count + intvl.demand.count - intvl.ignore
                if (offerCount > 0) { // Catches empty interval
                    intvl.avg = intvl.avg / offerCount
                    intvl.supply.percentage = intvl.supply.count / offerCount
                    intvl.demand.percentage = intvl.demand.count / offerCount

                    if (intvl.min < component.min) component.min = intvl.min
                    if (intvl.max > component.max) component.max = intvl.max
                }

                // Add interval vars on component vars
                component.avg += intvl.avg
                component.supply.count += intvl.supply.count
                component.demand.count += intvl.demand.count
                component.ignore += intvl.ignore

                // Delete ignore field
                delete intvl.ignore

                // Save in output doc
                doc.components[i].interval[j] = intvl
            })

            // Calculate avg and supply/demand percentages
            offerCount = component.supply.count + component.demand.count - component.ignore
            component.supply.percentage = component.supply.count / offerCount
            component.demand.percentage = component.demand.count / offerCount
            offerCount = 0
            component.interval.forEach(intvl =>  {
                if (intvl.supply.count + intvl.demand.count) offerCount++
            })
            component.avg = component.avg / offerCount

            // Add component vars to document vars
            doc.supply.count += component.supply.count
            doc.demand.count += component.demand.count
            doc.ignore += component.ignore

            // Get median
            component.median.sort(function(a, b) {
                return a - b
            })
            let medianLength = component.median.length
            if (medianLength % 2 != 0) {
                // Odd
                component.median = component.median[Math.floor(medianLength / 2)]
            } else {
                component.median = (component.median[medianLength / 2 - 1] + component.median[medianLength / 2]) / 2
            }

            // Delete ignore filed
            delete component.ignore

            // Save in output doc
            doc.components[i] = component
        })

        // Calculate document supply/demand percentages
        offerCount = doc.supply.count + doc.demand.count - doc.ignore
        if (offerCount > 0) {
            doc.supply.percentage = doc.supply.count / offerCount
            doc.demand.percentage = doc.demand.count / offerCount
        }

        // Delete ignore field
        delete doc.ignore
    }


    /**
     * Filters below/above average requests and user spam
     * @param {object[]} docs - Documents to filter
     * @param {number} intervalSize - Interval size in .getTime() format
     * @return {object[]} Filtered documents
     */
    purge(docs, intervalSize) {
        let users = [] // { name, lastRequest, component }
        let components = [] // { name, avg, count }
        let userIndex
        let componentIndex
        let request

        // Filter too many requests from one user
        for (let i = docs.length - 1; i >= 0; i--) {
            request = docs[i]
            userIndex = users.findIndex(x => x.name == request.user && x.component == request.component)
            componentIndex = components.findIndex(x => x.name == request.component)

            if (componentIndex == -1) {
                // Component doesn't exist, create object
                componentIndex = components.push({
                    name: request.component,
                    avg: 0,
                    count: 0
                }) - 1
            }

            if (userIndex == -1) {
                // User doesn't exist, create object
                users.push({
                    name: request.user,
                    lastRequest: request.createdAt,
                    component: request.component
                })
                components[componentIndex].count++
                    components[componentIndex].avg += request.price
            } else {
                if (users[userIndex].lastRequest.getTime() - request.createdAt.getTime() < intervalSize) {
                    // Last request too close, purge
                    docs.splice(i, 1)
                } else {
                    // Everything is okay, update lastRequest
                    users[userIndex].lastRequest = request.createdAt
                    components[componentIndex].count++
                        components[componentIndex].avg += request.price
                }
            }
        }

        // Process averages
        for (let i = 0; i < components.length; i++) {
            components[i].avg = components[i].avg / components[i].count
        }

        // Filter too high/low from average
        for (let i = docs.length - 1; i >= 0; i--) {
            request = docs[i]
            componentIndex = components.findIndex(x => x.name == request.component)

            if (componentIndex != -1) {
                if (request.price / components[componentIndex].avg > 6) {
                    // Current price is 600% over average, purge
                    docs.splice(i, 1)
                } else if (request.price / components[componentIndex].avg < 0.84) {
                    // Current price is 16% under average, purge
                    docs.splice(i, 1)
                }
            }
        }
        return docs
    }


    /**
     * Title function for case sensitivity
     */
    title(str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}

module.exports = Statistics
