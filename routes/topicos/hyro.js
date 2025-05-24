const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('topicos/hyro', { title: 'Hyro Takashima' });
});

module.exports = router;