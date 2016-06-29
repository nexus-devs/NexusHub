var express = require('express');
var router = express.Router();
var json = require(`./json/items/landing_page/popular.json`);

/* GET home page. */
router.get('/', function(req, res){
    res.render('generic', {
        content: json,
        title: "Title",
        desc: "Desc"
  })
})

module.exports = router;
