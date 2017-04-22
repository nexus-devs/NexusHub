'use strict'

const Method = require("../../../../Method.js")

/**
 * Contains multi-purpose functions for child-methods and provides default values
 */
class Statistics extends Method {
    constructor() {
        super()

        // Modify schema
        this.schema.description = "Get item statistics between a specified time frame."
        this.schema.resources = ["item"]
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
            // TODO: change collection to production
            // Query object
            let query = {
                'item': 50,
                'createdAt': { $gte: new Date(timeend), $lte: new Date(timestart) }
            }

            // Append component if one is given
            if (component != "") query['component'] = parseInt(component)

            // Query and resolve results
            this.db.collection('dummy_requests').find(query).toArray((err, result) => {
                if (err) reject(err)

                // Document to return
                let doc = {
                    title: "Saryn Prime", // TODO: Change this to reflect the actual item
                    type: "Prime",
                    supply: { count: 0, percentage: 0 },
                    demand: { count: 0, percentage: 0 },
                    components: []
                }

                // Query vars
                let resultLength = result.length
                let currentInterval = 0 // Interval helper
                let componentIndex = 0 // Cached variable for speed
                let currentRequest // Cached variable for speed
                let intervalSize = (timestart - timeend) / interval // How big is the interval gap
                let p = 0   // Cached variable for price

                for (let i = resultLength - 1; i >= 0; i--) {
                    currentRequest = result[i]
                    componentIndex = doc.components.findIndex(x => x.name == currentRequest.component)

                    // Create component if it doesn't exist
                    if (componentIndex == -1) {
                        // Component blueprint
                        let component = {
                            name: currentRequest.component,
                            avg: 0,
                            min: Number.POSITIVE_INFINITY,
                            max: Number.NEGATIVE_INFINITY,
                            supply: { count: 0, percentage: 0 },
                            demand: { count: 0, percentage: 0 },
                            interval: []
                        }

                        // Fill interval array
                        for (let j = 0; j < interval; j++) {
                            let intervalObj = {     // Helper obj for field creation
                                avg: 0,
                                min: Number.POSITIVE_INFINITY,
                                max: Number.NEGATIVE_INFINITY,
                                supply: { count: 0, percentage: 0 },
                                demand: { count: 0, percentage: 0 }
                            }

                            component.interval.push(intervalObj)
                        }

                        // Set index and push object
                        componentIndex = doc.components.push(component) - 1
                    }

                    // Find current interval
                    currentInterval = Math.floor((currentRequest.createdAt.getTime() - timeend) / intervalSize)

                    // Add to current interval
                    p = currentRequest.price
                    doc.components[componentIndex].interval[currentInterval].avg += p
                    if (p < doc.components[componentIndex].interval[currentInterval].min) doc.components[componentIndex].interval[currentInterval].min = p
                    if (p > doc.components[componentIndex].interval[currentInterval].max) doc.components[componentIndex].interval[currentInterval].max = p
                    if (currentRequest.offer == "selling") {
                        doc.components[componentIndex].interval[currentInterval].supply.count++
                    } else {
                        doc.components[componentIndex].interval[currentInterval].demand.count++
                    }
                }

                // Loop through intervals
                let offerCount = 0
                for (let i = 0; i < doc.components.length; i++) {
                    for (let j = 0; j < doc.components[i].interval.length; j++) {
                        // Calculate avg and supply/demand percentages
                        offerCount = doc.components[i].interval[j].supply.count + doc.components[i].interval[j].demand.count
                        doc.components[i].interval[j].avg = doc.components[i].interval[j].avg / offerCount
                        doc.components[i].interval[j].supply.percentage = doc.components[i].interval[j].supply.count / offerCount
                        doc.components[i].interval[j].demand.percentage = doc.components[i].interval[j].demand.count / offerCount

                        // Add interval vars on component vars
                        doc.components[i].avg += doc.components[i].interval[j].avg
                        doc.components[i].supply.count += doc.components[i].interval[j].supply.count
                        doc.components[i].demand.count += doc.components[i].interval[j].demand.count
                        if (doc.components[i].interval[j].min < doc.components[i].min) doc.components[i].min = doc.components[i].interval[j].min
                        if (doc.components[i].interval[j].max > doc.components[i].max) doc.components[i].max = doc.components[i].interval[j].max
                    }

                    // Calculate avg and supply/demand percentages
                    offerCount = doc.components[i].supply.count + doc.components[i].demand.count
                    doc.components[i].avg = doc.components[i].avg / doc.components[i].interval.length
                    doc.components[i].supply.percentage = doc.components[i].supply.count / offerCount
                    doc.components[i].demand.percentage = doc.components[i].demand.count / offerCount

                    // Add component vars to document vars
                    doc.supply.count += doc.components[i].supply.count
                    doc.demand.count += doc.components[i].demand.count
                }

                // Calculate document supply/demand percentages
                offerCount = doc.supply.count + doc.demand.count
                doc.supply.percentage = doc.supply.count / offerCount
                doc.demand.percentage = doc.demand.count / offerCount

                // Return document
                resolve(doc)
            })
        })
    }
}

module.exports = Statistics
