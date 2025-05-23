var express = require('express');
var router = express.Router();

router.get('/hyro', function(req, res, next) {
  res.render('topicos/hyro', { title: "Hyro Takashima" });
});

module.exports = router;