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
        var itemnamecap = capitalize(itemname)
        var data = require(`../../json/items.json`)
        var item = data.items.Components

        var itemsArray = []
        var i = 0


        // Count Items in index array
        data.items.forEach(function (items) {
            itemsArray.push(data.items.Title)
        })


        // If index contains item searched, render view
        while (i < itemsArray.length) {
            var n = data.items[i].Title
            var indexed = n.indexOf(itemnamecap)

            if (indexed != -1) {
                return res.view('item', {
                    HeaderTitle: `${itemnamecap} ${itembase} - WarframeNexus`,
                    itemdata: data.items[i],
                    css: "../css/",
                    js: "../js/",
                    img: "../img/"
                })
                break

            } else {
                if (i == (itemsArray.length - 1)) {
                    res.notFound(`${itemnamecap} couldn't be found. Please check your spelling`)
                }
            }
            i++
        }
    },


    // Redirect to index on search
    search: function (req, res) {
        console.log(req.query.item)
        var fullstring = req.query.item
        var data = require(`../../json/items.json`)
        var item = data.items.Components
        var itemsArray = []
        var stringArray = fullstring.split(" ")




        for (i = 0; i < stringArray.length; i++) {
            // Try first word, else try next
            var itemname = stringArray[i]
            var itemnamecap = capitalize(itemname)

            // Count Items in index array
            data.items.forEach(function (items) {
                itemsArray.push(data.items.Title)
            })



            // Check if in index :: USE .find() INSTEAD FOR MODEL COMPARISON :: http://sailsjs.org/documentation/reference/waterline-orm/models/find

            for (j = 0; j < itemsArray.length; j++) {
                var n = data.items[j].Title
                var indexed = n.indexOf(itemnamecap)

                if (indexed != -1) { // Render view when found
                        var itembase = data.items[j].Type
                        return res.redirect(`../../${itembase}/${itemname}`)
                    /* return res.view('item', {
                        HeaderTitle: `${itemnamecap} ${itembase} - WarframeNexus`,
                        itemdata: data.items[j],
                        css: "../css/",
                        js: "../js/",
                        img: "../img/"
                    }) */

                } else {


                }
            }
        }

            res.notFound(`${itemnamecap} couldn't be found. Please check your spelling`)
    }
}
