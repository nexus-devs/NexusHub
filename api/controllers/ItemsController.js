/**
 * ItemsController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {
        // load according file
        var url = req.originalUrl;
        var urlbase = url.split('/');
        var itembase = urlbase[1];
        var itemname = url.split('/').pop().toLowerCase();;
        var data = require(`../../json/items/${itembase}.json`);
        var item = data.items.components;

        var itemsArray = []
        var i = 0;

        // for data.items.length
        // if type = itemname
        // save i
        // allow render


        // Save Items to index
        data.items.forEach(function (items) {
            itemsArray.push(JSON.stringify(items).toLowerCase()); //push values here
        });


        while (i < itemsArray.length) {
            var n = itemsArray[i]
            var indexed = n.indexOf(itemname)

            if (indexed != -1) {
                return res.view('item', {
                    // model: items
                    itemdata: data.items[i],
                    css: "../css/",
                    js: "../js/",
                    img: "../img/"
                });
                break

            } else {
                if (i == (itemsArray.length - 1)){
                    res.notFound();
                }
            }
            i++;
        }

    }
};
