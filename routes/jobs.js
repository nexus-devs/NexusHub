var express = require('express');
var router = express.Router();
var json = require('./json/jobs.json');



/* GET home page. */
router.get('/', function(req, res){
  res.render('generic', {
    content: json,
    page_title: json.PageTitle,
    main_title: json.Headline,
    title: "Title",
    desc: "Desc"
  })
})

module.exports = router;
