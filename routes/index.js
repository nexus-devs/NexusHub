var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res){
    var json = require(`./json/items/landing_page/popular.json`);
    res.render('index', {
        content: json,
        title: "Title",
        desc: "Desc"
  })
})

module.exports = router;
