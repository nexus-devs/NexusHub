var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res){
    var package = req.originalUrl;
    var json = require(`./json/${package}.json`);
    res.render('generic', {
        content: json,
        page_title: json.PageTitle,
        main_title: json.Headline,
        title: "Title",
        desc: "Desc"
  })
})

module.exports = router;
