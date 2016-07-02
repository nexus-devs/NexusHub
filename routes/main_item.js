var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    var package = req.originalUrl;
    var data = require(`./json/items/${package}.json`);
    var item = data.items.components;

    res.render('main_item', {
        content: data,
        item: item,
        headline: package,
        css: "../css/",
        js: "../js/",
        img: "../img/"
    })
})

module.exports = router;
