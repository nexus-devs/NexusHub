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
        Items.find({
            Title: itemname
        }).exec(function (err, itemobj) {
            var itembase = capitalize(urlbase[1])
            var itemname = capitalize(url.split('/').pop().toLowerCase())

            if (typeof itemobj[0] !== 'undefined') {
                var itembase = itemobj[0].Type
                var itemname = itemobj[0].Title

                return res.view('item', {
                    HeaderTitle: `${itemname} ${itembase} - WarframeNexus`,
                    itemdata: itemobj[0],
                    css: "../css/",
                    js: "../js/",
                    img: "../img/"
                })
            } else {
                res.notFound(`${itemname} ${itembase} couldn't be found. Please check your spelling`)
            }
        })
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
