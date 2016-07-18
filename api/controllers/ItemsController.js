/**
 * ItemsController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//Capitalize function
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


module.exports = {
    index: function (req, res) {
        var url = req.originalUrl
        var urlbase = url.split('/')
        var itembase = capitalize(urlbase[1])
        var itemname = capitalize(url.split('/').pop().toLowerCase())
        var timerange = 7 // This would usually be included in POST method of time range selection in main screen


        async.waterfall([

            // Validate entered URL (if done manually)
            function getItemInfo(callback) {
                ItemList.find({
                    _id: itemname
                }).exec(function (err, item) {
                    if (typeof item[0] === 'undefined') {
                        res.notFound(`${itemname} ${itembase} couldn't be found. Please check your spelling`)
                    } else {
                        callback(null, item, item[0].name)
                    }
                })
            },


            // Check if item has been updated
            function checkUpdate(item, itemnamefull, callback) {
                if (item[0].update === 'pending') { // === 'pending' normally
                    callback(null, item, itemnamefull)
                } else {
                    Itemcache.find({
                        _id: itemname
                    }).exec(function (err, itemobj) {
                        var itembase = itemobj[0].Type
                        var itemname = itemobj[0].Title

                        return res.view('item', {
                            HeaderTitle: `${itemname} - WarframeNexus`,
                            itemdata: itemobj[0],
                            css: "../css/",
                            js: "../js/",
                            img: "../img/"
                        })
                    })
                }
            },

            function checkIfSingleItem(item, itemnamefull, callback) {
                // Check if Item without Component
                ItemList.find({
                    _id: itemname
                }).exec(function (err, item) {
                    if (typeof item[0].components[0] === 'undefined') {
                        var single_item = 'true'
                    } else {
                        var single_item = 'false'
                    }
                    callback(null, item, itemnamefull, single_item)
                })
            },


            // Generate Item Stats from requests
            function generateItem(item, itemnamefull, single_item, callback) {
                var components = item[0].components // component schema
                components.push('Set')
                var WTB = 0
                var WTS = 0

                console.log('item: ' + itemname)
                console.log('type: ' + itembase)
                console.log('==========================')


                Itemcache.native(function (err, collection) {
                    collection.update({
                        "_id": itemname,
                    }, {
                        $set: {
                            "Title": itemnamefull,
                            "Type": itembase,
                            "SupDem": [],
                            "SupDemNum": [],
                            "Components": []
                        }
                    }, {
                        upsert: true
                    })
                })




                // Define Loop Actions
                var getComponentStats = function (component, callback) {

                    // Find all users offering item
                    Users.find({
                        'requests.title': itemname,
                    }).exec(function (err, user) {

                        // Generate values for each Component

                        // Clear values when starting with new component // generate array w/ 0 for timerange
                        var comp_data = []
                        var comp_count = []
                        for (var i = 0; i < timerange; i++) {
                            comp_count.push(0)
                        }
                        var comp_val = []
                        for (var i = 0; i < timerange; i++) {
                            comp_val.push(0)
                        }

                        // For each user, check if item in each request (loop through every relevant request)
                        user.forEach(function (user) {
                            user.requests.forEach(function (req_item) {

                                // Validate request belonging to item
                                if (req_item.title === itemname) {
                                    req_item.components.forEach(function (req_component) {

                                        // Check Time between Request and now
                                        var prevTime = new Date(req_item.updatedAt);
                                        var thisTime = new Date();
                                        var diff = thisTime.getTime() - prevTime.getTime();
                                        var delta = (diff / (1000 * 60 * 60 * 24));

                                        // Check if Request has been comitted within timerange
                                        if (component === req_component.name && delta < timerange) {

                                            if (req_item.components[0].to === 'WTB') {
                                                WTB++
                                            } else {
                                                WTS++
                                            }

                                            // Generate data array
                                            for (var i = 0; i < timerange; i++) {
                                                // If request at 'i' day, value and position to according place
                                                if (Math.floor(delta) === i) {
                                                    if (req_component.data !== 'null') {
                                                        comp_val[i] = +comp_val[i] + +req_component.data
                                                        comp_count[i]++
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                            })
                        })

                        // Take average of value divided by count
                        for (var i = 0; i < timerange; i++) {
                            if (comp_val[i] !== 0) {
                                comp_data.push((comp_val[i] / comp_count[i]))
                            } else {
                                comp_data.push(null)
                            }
                        }

                        // Reverse array (newest at end to match chart)
                        comp_data.reverse();
                        console.log(comp_data)

                        // Generate average value
                        var avg = 0
                        var valid_count = 0
                        for (var i = 0; i < comp_data.length; i++) {
                            if (comp_data[i] !== null) {
                                var current_value = comp_data[i]
                                valid_count++
                                avg = avg + current_value
                            }

                        }
                        if (avg !== 0) {
                            // Realtime avg
                            var comp_val_rt = ((avg / valid_count)).toFixed(4)
                            avg = Math.floor((avg / valid_count)).toString() + 'p'
                        } else {
                            var comp_val_rt = ''
                            avg = ''
                        }

                        console.log('comp_val_rt: ' + comp_val_rt)
                        console.log('avg: ' + avg)




                        // visibile: false if SET w/ multi components
                        if (component === 'Set' && single_item === 'true') {
                            Itemcache.native(function (err, collection) {
                                collection.update({
                                    "_id": itemname,
                                }, {
                                    $push: {
                                        "Components": {
                                            name: component,
                                            avg: avg,
                                            comp_val_rt: comp_val_rt,
                                            data: comp_data,
                                            visible: true
                                        }
                                    }
                                })
                            })
                            return callback();
                        } else if (component === 'Set' && single_item === 'false') {
                            Itemcache.native(function (err, collection) {
                                collection.update({
                                    "_id": itemname,
                                }, {
                                    $push: {
                                        "Components": {
                                            name: component,
                                            avg: avg,
                                            comp_val_rt: comp_val_rt,
                                            data: comp_data,
                                            visible: false
                                        }
                                    }
                                })
                            })
                            return callback();
                        } else {
                            Itemcache.native(function (err, collection) {
                                collection.update({
                                    "_id": itemname,
                                }, {
                                    $push: {
                                        "Components": {
                                            name: component,
                                            avg: avg,
                                            comp_val_rt: comp_val_rt,
                                            data: comp_data
                                        }
                                    }
                                })
                            })
                            return callback();
                        }

                    })
                }






                // Loop through each component and check if requests contain component
                console.log(components)
                async.forEach(components, getComponentStats, function (component) {
                    callback(null, WTS, WTB)
                })

            },




            function (supply, demand, callback) {

                // Create SupDem/SupDemNum
                var SupDemNum = [supply, demand]
                if (supply < demand) {
                    var SupDemMax = supply + demand
                    var supply_val = Math.floor((supply / SupDemMax) * 100)
                    var SupDem = [supply_val, 100 - supply_val]
                } else if (supply > demand) {
                    var SupDemMax = supply + demand
                    var demand_val = Math.ceil((demand / SupDemMax) * 100)
                    var SupDem = [100 - demand_val, demand_val]
                } else if (supply === demand) {
                    var SupDem = [50, 50]
                } else if (supply === 0 && demand === 0) {
                    var SupDem = [0, 0]
                }

                // Update itemcache with supply/demand
                Itemcache.native(function (err, collection) {
                    collection.update({
                        "_id": itemname,
                    }, {
                        $set: {
                            "SupDem": SupDem,
                            "SupDemNum": SupDemNum
                        }
                    })
                })

                // Set item as updated -> won't run this all again unless new request comes in
                ItemList.native(function (err, collection) {
                    collection.update({
                        "_id": itemname,
                    }, {
                        $set: {
                            "update": 'false'
                        }
                    })
                })

                console.log('SupDemNum: ' + SupDemNum)
                console.log('Percentages: ' + SupDem)
                console.log('----------------------')

                callback();
            },


            // Render view
            function (callback) {
                Itemcache.find({
                    _id: itemname
                }).exec(function (err, itemobj) {
                    var itembase = itemobj[0].Type
                    var itemname = itemobj[0].Title

                    return res.view('item', {
                        HeaderTitle: `${itemname} - WarframeNexus`,
                        itemdata: itemobj[0],
                        css: "../css/",
                        js: "../js/",
                        img: "../img/"
                    })
                })
            }])
    },


    // Search function
    search: function (req, res) {
        var fullstring = req.query.item
        var stringArray = fullstring.split(" ")
        var viewrendered = 'false'
        var i = 0

        // Check for each search term
        stringArray.forEach(function (string, callback) {

                async.waterfall([

                // Try retrieving item name
                function retrieveItem(callback) {

                            // All Hail the Railwayhead
                            if (capitalize(string) === 'Booben') {
                                ItemList.find({
                                    _id: 'Vauban'
                                }).exec(function (err, itemobj) {
                                    if (err) {
                                        callback(err, null)
                                        return
                                    }
                                    callback(null, itemobj)
                                })
                            } else {
                                ItemList.find({
                                    _id: capitalize(string)
                                }).exec(function (err, itemobj) {
                                    if (err) {
                                        callback(err, null)
                                        return
                                    }
                                    callback(null, itemobj)
                                })
                            }

                            // Check if item was found
                },
                function checkValidity(itemobj, callback) {
                            if (viewrendered === 'false') {
                                if (typeof itemobj[0] !== 'undefined') {
                                    viewrendered = 'true'
                                    var itembase = itemobj[0].type
                                    var itemname = itemobj[0].id
                                    return res.redirect(`../../${itembase}/${itemname}`)
                                } else {
                                    viewrendered = 'true'
                                    res.notFound(`${fullstring} couldn't be found. Please check your spelling`)
                                }
                            }
                }

            ]) // End async.waterfall

            }) // End Query

    }
}
