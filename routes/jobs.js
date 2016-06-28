var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.render('generic', {
    page_title: jobs.PageTitle,
    main_title: "We're currenlty hiring!",
    title_1: "Backend Developers",
    title_2: "Marketing"
  })
})

module.exports = router;
