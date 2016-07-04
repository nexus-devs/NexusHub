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
        // load according file
        var url = req.originalUrl;
        var urlbase = url.split('/');


        var itembase = urlbase[1];
        var itemname = url.split('/').pop().toLowerCase();
        var itemnamecap = capitalize(itemname);
        var data = require(`../../json/items/${itembase}.json`);
        var item = data.items.components;

        var itemsArray = []
        var i = 0;


        // PROPER: populate items model with each item in prime DB, if inside, pass current model data to view
        //^^^^^^^^^^^^^^^^^^^^^^^^^



        // Save Items to index
        data.items.forEach(function (items) {
            itemsArray.push(JSON.stringify(items).toLowerCase()); //push values here
        });


        // If index contains item searched, render view
        while (i < itemsArray.length) {
            var n = itemsArray[i]
            var indexed = n.indexOf(itemname)

            if (indexed != -1) {
                return res.view('item', {
                    // model: items
                    HeaderTitle: `${itemnamecap} ${itembase} - WarframeNexus`,
                    itemdata: data.items[i],
                    css: "../css/",
                    js: "../js/",
                    img: "../img/"
                });
                break

            } else {
                if (i == (itemsArray.length - 1)) {
                    res.notFound(`${itemnamecap} couldn't be found. Please check your spelling`);
                }
            }
            i++;
        }

    }
};
