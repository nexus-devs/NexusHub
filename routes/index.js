var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res){
    var Data = require(`./json/items/landing_page/popular.json`);
    res.render('index', {
        content: Data,
        css: "/css/",
        js: "/js/",
        img: "/img/"
  })
})

module.exports = router;
