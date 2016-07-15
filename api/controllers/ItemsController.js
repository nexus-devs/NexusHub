/**
 * ItemsController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//Capitalize function
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


module.exports = {
    index: function (req, res) {
        var url = req.originalUrl
        var urlbase = url.split('/')
        var itembase = capitalize(urlbase[1])
        var itemname = capitalize(url.split('/').pop().toLowerCase())

        // Validate entered URL (if done manually)
        async.waterfall([

            // Get Item information
            function getItemInfo(callback) {
                ItemList.find({
                    name: itemname
                }).exec(function (err, item) {
                    if (typeof item[0] === 'undefined') {
                        res.notFound(`${itemname} ${itembase} couldn't be found. Please check your spelling`)
                    } else {
                        callback(null, item)
                    }
                })
            },


            // Check if item has been updated
            function checkUpdate(item, callback) {
                if (item[0].update === 'pending') {
                    callback(null, item)
                } else {
                    Itemcache.find({
                        Title: itemname
                    }).exec(function (err, itemobj) {
                        var itembase = itemobj[0].Type
                        var itemname = itemobj[0].Title

                        return res.view('item', {
                            HeaderTitle: `${itemname} ${itembase} - WarframeNexus`,
                            itemdata: itemobj[0],
                            css: "../css/",
                            js: "../js/",
                            img: "../img/"
                        })
                    })
                }
                },


            // Generate Item Stats from requests
            function generateItem(item, callback){

                Users.find({
                    'requests.title': itemname,
                }).exec(function (err, user){

                    // Finds all users that requested item
                    user.forEach(function(request){

                        // Select all requests by users
                        request.requests.forEach(function(req_item){

                            // Check if request is searched item
                            if (req_item.title === itemname){
                                var itemcount = 0;
                                var components = item[0].components // component schema

                                // Loop through each component and check if in component schema
                                req_item.components.forEach(function(req_component){
                                    console.log(req_component)
                                    components.forEach(function(component){

                                        if (component === req_component.name){
                                            // increase stats (value, count -> generate daily average, add count to main supdem)
                                            // if set > also add visible: false
                                            // with values above: append to itemname in itemcache
                                            // if component has count of 0: values = 'null'
                                            // > clear values and loop through next component.
                                            console.log(req_component.name)
                                            console.log(req_component.data)
                                        }
                                    })
                                })
                            }
                        })
                    })
                })
            }
        ])
    },


    // Search function
    search: function (req, res) {
        var fullstring = req.query.item
        var stringArray = fullstring.split(" ")
        var viewrendered = 'false'
        var i = 0

        // Check for each search term
        async.forEach(stringArray, function (string, callback) {

                async.waterfall([

                // Try retrieving item name
                function retrieveItem(callback) {
                            ItemList.find({
                                _id: capitalize(string)
                            }).exec(function (err, itemobj) {
                                if (err) {
                                    callback(err, null)
                                    return
                                }
                                callback(null, itemobj)
                            })

                            // Check if item was found
                },
                        function checkValidity(itemobj, callback) {
                            if (typeof itemobj[0] !== 'undefined') {
                                var itembase = itemobj[0].type
                                var itemname = itemobj[0].name
                                return res.redirect(`../../${itembase}/${itemname}`)
                            } else {
                                res.notFound(`${fullstring} couldn't be found. Please check your spelling`)
                            }

                }

            ]) // End async.waterfall
                callback();
            }) // End Query

    }
}
