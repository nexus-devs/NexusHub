var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res){
    var Data = require(`./json/items/landing_page/popular.json`);
    //var componentData = JSON.parse(`./json/items/landing_page/popular.json`);
    res.render('index', {
        content: Data,
        title: "Title",
        desc: "Desc"
  })
})

module.exports = router;
