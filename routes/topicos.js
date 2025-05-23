var express = require('express');
var router = express.Router();

router.get('/topicos', function(req, res, next) {
  res.render('topicos', { title: "Tópicos" });
});

module.exports = router;