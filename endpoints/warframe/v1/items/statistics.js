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

                // Purge, Get Stats, Resolve
                .then(result => this.purge(result, timestart, timeend, interval))
                .then(result => this.getStatistics(query, interval, result))
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
     * Filters below/above average requests and user spam
     */
    purge(result, timestart, timeend, interval) {
        let intervalSize = (timestart - timeend) / interval
        let users = [] // { name, lastRequest, component }
        let components = [] // { name, avg, count }

        // Filter too many requests from one user
        this.purgeSpam(result, users, components, intervalSize)

        // Process averages
        for (let i = 0; i < components.length; i++) {
            components[i].avg = components[i].avg / components[i].count
        }

        // Filter too high/low from average
        this.purgeExtremes(result, components)

        return result
    }


    /**
     * Filter multiple requests from one user in single interval
     */
    purgeSpam(result, users, components, intervalSize) {
        for (let i = result.length - 1; i >= 0; i--) {
            let request = result[i]
            let userIndex = users.findIndex(x => x.name == request.user && x.component == request.component)
            let componentIndex = components.findIndex(x => x.name == request.component)

            // Component doesn't exist, create object
            if (componentIndex == -1) {
                componentIndex = components.push({
                    name: request.component,
                    avg: null,
                    count: 0
                }) - 1
            }

            // User doesn't exist, create object
            if (userIndex == -1) {
                users.push({
                    name: request.user,
                    lastRequest: request.createdAt,
                    component: request.component
                })

                if (request.price != null  && request.price > 5 && request.price < 1000) {
                    ++components[componentIndex].count
                    components[componentIndex].avg += request.price
                }
            }

            // User does exist, check if request in interval
            else {

                // Last request too close, purge
                if (users[userIndex].lastRequest.getTime() - request.createdAt.getTime() < intervalSize) {
                    result.splice(i, 1)
                }

                // Everything is okay, update lastRequest
                else {
                    users[userIndex].lastRequest = request.createdAt
                    if (request.price != null && request.price > 5 && request.price < 1000) {
                        ++components[componentIndex].count
                        components[componentIndex].avg += request.price
                    }
                }
            }
        }
    }


    /**
     * Remove values above min/max limits
     */
    purgeExtremes(result, components) {
        for (let i = result.length - 1; i >= 0; i--) {
            let request = result[i]
            let componentIndex = components.findIndex(x => x.name == request.component)

            if (componentIndex != -1 && request.price != null) {

                // Current price is 300% over average, purge
                if (request.price / components[componentIndex].avg > 3) {
                    result.splice(i, 1)
                }

                // Current price is 33% under average, purge
                else if (request.price / components[componentIndex].avg < 0.33) {
                   result.splice(i, 1)
                }
            }
        }
    }


    /**
     * Calculate queried item's statistics
     */
    getStatistics(query, interval, result) {

        // Empty results?
        if (result.length <= 0) {
            return {}
        }

        // Document to return
        let doc = {
            title: query.item,
            type: result[0].type,
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
                avg: null,
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
                let sub = { // Helper obj for field creation
                    avg: null,
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
                component.interval.push(sub)
            }

            // Push to original doc
            this.pushSorted(doc.components, component)
        }
        return component
    }


    /**
     * Pushes Component into array at correct position
     */
    pushSorted(components, component) {

        // Array empty? Just push
        if (components.length <= 0) components.push(component)

        // Not empty -> Push at correct position
        else {
            for (let i = 0; i < components.length; i++) {

                // Sort if necessary
                if (components[i].name > component.name) {
                    components.splice(i, 0, component)
                    break
                }

                // Add to end if no sorting needed
                if (i === components.length - 1) {
                    components.push(component)
                    break
                }
            }
        }
    }


    /**
     * Calculate Statistics from accumulated data
     */
    process(doc) {
        let offers = 0

        // Calculate data from each component's intervals
        doc.components.forEach((component, i) => {
            this.processIntervals(doc, i, component, offers)
            this.processComponent(doc, component, offers)
            this.processMedian(doc, i, component)
        })
    }


    /**
     * Calculate Data for each Interval of component
     */
    processIntervals(doc, i, component, offers) {
        component.interval.forEach((intvl, j) => {

            // Calculate avg and supply/demand percentages
            offers = intvl.supply.count + intvl.demand.count
            if (offers) {
                intvl.avg = intvl.avg / (offers - intvl.ignore)
                intvl.supply.percentage = intvl.supply.count / offers
                intvl.demand.percentage = intvl.demand.count / offers

                // New min/max?
                if (intvl.min < component.min) component.min = intvl.min
                if (intvl.max > component.max) component.max = intvl.max
            }

            // Add interval vars on component vars
            component.avg += intvl.avg ? intvl.avg : 0
            component.supply.count += intvl.supply.count
            component.demand.count += intvl.demand.count
            component.ignore += intvl.ignore

            // Delete ignore field
            delete intvl.ignore

            // Save in output doc
            doc.components[i].interval[j] = intvl
        })
    }


    /**
     * Process Overall component stats from intervals
     */
    processComponent(doc, component, offers) {

        // Determine demand/supply
        offers = component.supply.count + component.demand.count
        component.supply.percentage = component.supply.count / offers
        component.demand.percentage = component.demand.count / offers
        offers = 0

        // How many intervals have avg value?
        component.interval.forEach(intvl => {
            if (intvl.avg) offers++
        })

        component.avg = component.avg / offers

        // Add component vars to document vars
        doc.supply.count += component.supply.count
        doc.demand.count += component.demand.count
        doc.ignore += component.ignore

        // Calculate document supply/demand percentages
        offers = doc.supply.count + doc.demand.count
        if (offers > 0) {
            doc.supply.percentage = doc.supply.count / offers
            doc.demand.percentage = doc.demand.count / offers
        }

        // Delete ignore field
        delete doc.ignore
    }


    /**
     * Process Median from given component
     */
    processMedian(doc, i, component) {
        component.median.sort(function(a, b) {
            return a - b
        })
        let medianLength = component.median.length

        // Even number of requests?
        if (medianLength % 2 != 0) {
            component.median = component.median[Math.floor(medianLength / 2)]
        } else {
            component.median = (component.median[medianLength / 2 - 1] + component.median[medianLength / 2]) / 2
        }

        // Delete ignore filed
        delete component.ignore

        // Save in output doc
        doc.components[i] = component
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
