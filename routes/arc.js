var express = require('express');
var router = express.Router();

router.get('/arc', function(req, res, next) {
  res.render('topicos/arc', { title: "Hyro Takashima" });
});

module.exports = router;