var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('FAQ', { title: "Perguntas Frequentes" });
});

module.exports = router;
