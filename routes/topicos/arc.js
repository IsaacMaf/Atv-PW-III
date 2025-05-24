const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('topicos/arc', { title: 'Arc' });
});

module.exports = router;