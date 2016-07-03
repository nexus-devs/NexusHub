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
        var itemname = url.split('/').pop();
        var data = require(`../../json/items/${itembase}.json`);
        var item = data.items.components;

        console.log(data.items[0])

        return res.view('item', {
            // model: items
            itemdata: data.items[0],
            css: "../css/",
            js: "../js/",
            img: "../img/"
        });
    }
};
