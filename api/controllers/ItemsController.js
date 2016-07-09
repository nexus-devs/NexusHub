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
        var i = 0

        // Check for each search term
        async.forEach(stringArray, function (string, next){

            Items.find({
                Title: string
            }).exec(function (err, dbItem) {

                var itemcheck = JSON.stringify(dbItem)
                i++

                // If found, redirect to proper url
                if (itemcheck !== '[]' && viewrendered == 'false') {
                    viewrendered = 'true'
                    var itembase = dbItem[0].Type
                    var itemname = dbItem[0].Title
                    return res.redirect(`../../${itembase}/${itemname}`)

                // Else, if end of function: return 404
                } else {
                    if (viewrendered == 'false' && i == stringArray.length) {
                        res.notFound(`${fullstring} couldn't be found. Please check your spelling`)
                    }

                }

                next()

            }) // End Query

        }) // End Loop
    }
}
