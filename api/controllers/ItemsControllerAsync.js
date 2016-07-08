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
        // load according file
        var url = req.originalUrl
        var urlbase = url.split('/')
        var itembase = urlbase[1]
        var itemname = url.split('/').pop().toLowerCase()


        console.log('wtf am i doing here')

        // Check for each query word
        Items.find({
            Title: itemname
        }).exec(function (err, dbItem) {
            var itembase = dbItem[0].Type
            var itemname = dbItem[0].Title

            return res.view('item', {
                HeaderTitle: `${itemname} ${itembase} - WarframeNexus`,
                itemdata: dbItem[0],
                css: "../css/",
                js: "../js/",
                img: "../img/"
            })

        })

    },


    // Search function
    search: function (req, res) {
        var fullstring = req.query.item
        var stringArray = fullstring.split(" ")
        var viewrendered = 'false'

        // Check for each query word
        async.each(stringArray, function (string, callback) {

                Items.find({
                    Title: string
                }).exec(function (err, dbItem) {
                    var u = 0
                    u = u + 1
                    console.log(u)
                    var itemcheck = JSON.stringify(dbItem)

                    if (itemcheck !== '[]') {
                        viewrendered = 'true'
                        var itembase = dbItem[0].Type
                        var itemname = dbItem[0].Title

                        return (dbItem)

                    } else {
                        if (viewrendered == 'false' && u == stringArray.length) {
                            callback(err)
                        }

                    }
                }, function (err) {
                if (err) {
                    console.log('error')
                } else {
                    console.log('success' + dbItem)
                }
            })
            }) // End Loop


    }
}
