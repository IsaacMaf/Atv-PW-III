var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('sobre', { title: "Sobre o Meu Site" });
});

module.exports = router;