/**
 * ItemsController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//title function
function title(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}



module.exports = {
    index: function (req, res) {
        var url = req.originalUrl
        var urlbase = url.split('/')
        var itembase = title(urlbase[1])
        var itemname = title(url.split('/').pop().replace("%20", " "))
        var timerange = 7 // This would usually be included in POST method of time range selection in main screen

        console.log('[CLIENT]')
        console.log('item: ' + itemname)
        console.log('type: ' + itembase)
        console.log('==========================')
        console.log(' ')


        async.waterfall([

            // Validate entered URL (if done manually)
            function getItemInfo(callback) {
                ItemList.find({
                    _id: itemname
                }).exec(function (err, item) {
                    if (typeof item[0] === 'undefined') {
                        res.notFound(itemname + ' ' + itembase + " couldn't be found. Please check your spelling")
                    } else {
                        callback(null, item, item[0].name)
                    }
                })
            },


            // Check if item has been updated
            function checkUpdate(item, itemnamefull, callback) {
                var prevTime = new Date(item[0].updatedAt);
                var thisTime = new Date();
                var diff = thisTime.getTime() - prevTime.getTime();
                var delta = (diff / (1000 * 60 * 60 * 24));


                if (item[0].update === 'pending' && delta > 0.99) { // === 'pending' normally

                    // Set item as updated -> won't run this all again unless new request comes in
                    ItemList.native(function (err, collection) {
                        collection.update({
                            "_id": itemname,
                        }, {
                            $set: {
                                "update": 'false',
                                "updatedAt": new Date()
                            }
                        })
                    })
                    callback(null, item, itemnamefull)

                } else {
                    Itemcache.find({
                        _id: itemname
                    }).exec(function (err, itemobj) {
                        var itembase = itemobj[0].Type
                        var itemname = itemobj[0].Title

                        return res.view('item', {
                            HeaderTitle: itemname + ' - NexusStats',
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
                        var comp_val_arr = []
                        var comp_val = []
                        for (var i = 0; i < timerange; i++) {
                            comp_val.push(0)
                        }
                        var comp_count = []
                        for (var i = 0; i < timerange; i++) {
                            comp_count.push(0)
                        }
                        var req_arr = {}
                        for (var i = 0; i < timerange; i++) {
                            req_arr[i] = []
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
                                                        req_arr[i].push(req_component.data)
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                            })
                        })

                        // Price Filter Functions
                        for (var y = 0; y < timerange; y++) {
                            var req_arr_day = req_arr[y]
                            var req_arr_clean = []
                            var req_arr_real = []


                            // Filter out Max Limit entries & Single Offers
                            for (var i = 0; i < req_arr_day.length; i++) {
                                if (req_arr_day[i] < 2500 && req_arr_day.length > 3) {
                                    req_arr_clean.push(+req_arr_day[i])
                                }
                            }

                            // Create daily average
                            var req_sum = req_arr_clean.reduce(function (pv, cv) {
                                return pv + cv;
                            }, 0);

                            var req_avg = req_sum / req_arr_clean.length


                            // Remove Entries above 300% price & below 33% price
                            req_arr_clean.forEach(function (request) {
                                if (request < 3 * req_avg && request > 0.3 * req_avg) {
                                    req_arr_real.push(request)
                                }
                            })


                            // Create full day value for later steps
                            var req_arr_real_sum = req_arr_real.reduce(function (pv, cv) {
                                return pv + cv;
                            }, 0);

                            comp_val[y] = req_arr_real_sum
                            comp_count[y] = req_arr_real.length
                        }



                        // Generate average value
                        for (var i = 0; i < timerange; i++) {
                            if (comp_val[i] !== 0) {
                                comp_val_arr.push((comp_val[i]))
                            } else {
                                comp_val_arr.push(0)
                            }
                        }

                        var avg = 0
                        var avg_b = 0
                        var c_sum = comp_count.reduce(function (pv, cv) {
                            return pv + cv;
                        }, 0);
                        var v_sum = comp_val_arr.reduce(function (pv, cv) {
                            return pv + cv;
                        }, 0);

                        avg_b = v_sum / c_sum
                        var c_sum = comp_count.reduce(function (pv, cv) {
                            return pv + cv;
                        }, 0);
                        var v_sum = comp_val_arr.reduce(function (pv, cv) {
                            return pv + cv;
                        }, 0);

                        avg_b = v_sum / c_sum

                        if (v_sum !== 0) {
                            var comp_val_rt = avg_b.toFixed(4)
                            avg = Math.floor(avg_b).toString() + 'p'
                        } else {
                            var comp_val_rt = ''
                            avg = ''
                        }

                        //console.log('comp_val_rt: ' + comp_val_rt)
                        //console.log('avg: ' + avg)


                        // Generate normalized daily average value (single offer a day at 10 times the price shouldn't display the price for said day at such an exaggerated value)
                        // (( avg[i] * c[i] ) + (( c_sum - c[i] ) * avg_b )) / c_sum
                        var comp_data = []

                        for (var i = 0; i < timerange; i++) {
                            if (comp_val[i] !== 0) {
                                var avg_pure = comp_val_arr[i] / comp_count[i]
                                var avg_single = ((avg_pure * comp_count[i] * 2) + ((c_sum - comp_count[i] * 2) * avg_b)) / c_sum
                                if (avg_single > 0) {
                                    comp_data.push(avg_single)
                                } else {
                                    comp_data.push(null)
                                }

                            } else {
                                comp_data.push(null)
                            }
                        }


                        comp_data.reverse()

                        // visible: false if SET w/ multi components
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
                //console.log(components)
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

                console.log('[SYSTEM]')
                console.log('Updated ' + itemname)
                console.log('==========================')
                console.log(' ')

                //console.log('SupDemNum: ' + SupDemNum)
                //console.log('Percentages: ' + SupDem)
                //console.log('----------------------')

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
                        HeaderTitle: itemname + ' - NexusStats',
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
        var loopcount = 0

        // Check for each search term
        async.eachSeries(stringArray, function (string, eachCallback) {

                async.waterfall([

                // Try retrieving item name
                function retrieveItem(callback) {

                            // All Hail the Railwayhead
                            if (title(string) === 'Booben') {
                                ItemList.find({
                                    _id: 'Vauban'
                                }).exec(function (err, itemobj) {
                                    if (err) {
                                        callback(err, null)
                                        return
                                    }
                                    callback(null, itemobj, loopcount)
                                })
                            } else {
                                ItemList.find({
                                    _id: title(string)
                                }).exec(function (err, itemobj) {
                                    if (err) {
                                        callback(err, null)
                                        return
                                    }
                                    if (typeof itemobj[0] !== 'undefined') {
                                        callback(null, itemobj)
                                    } else {
                                        ItemList.find({
                                            name: title(fullstring)
                                        }).exec(function (err, itemobj) {
                                            if (err) {
                                                callback(err, null)
                                                return
                                            } else {
                                                callback(null, itemobj)
                                            }
                                        })
                                    }
                                })
                            }

                            // Check if item was found
                },
                function checkValidity(itemobj, callback) {
                            loopcount++
                            if (viewrendered === 'false') {
                                if (typeof itemobj[0] !== 'undefined') {
                                    viewrendered = 'true'
                                    var itembase = itemobj[0].type
                                    var itemname = itemobj[0].id
                                    return res.redirect('../../' + itembase + '/' + itemname)
                                } else if (loopcount === (stringArray.length)) {
                                    viewrendered = 'true'
                                    res.notFound(fullstring + " couldn't be found. Please check your spelling")
                                }
                            }
                            eachCallback();

                }

            ]) // End async.waterfall

            }) // End Query

    },


    query:function (req, res) {
        Itemcache.find().exec(function (err, data) {
            if (err) {
                callback(err, null)
                return
            }
            console.log('[SYSTEM]')
            console.log('API Call')
            console.log('==========================')
            console.log(' ')
            return res.json(data)
        })
    }
}
