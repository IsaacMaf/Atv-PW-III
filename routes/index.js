var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: "Isaac's Rpg Characters Wiki" });
});

module.exports = router;
