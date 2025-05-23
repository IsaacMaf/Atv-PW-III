var express = require('express');
var router = express.Router();

router.get('/hartreus', function(req, res, next) {
  res.render('topicos/hartreus', { title: "Hyro Takashima" });
});

module.exports = router;