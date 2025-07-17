const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('topicos/hyrotakashima', { title: 'Hyro Takashima' });
});

module.exports = router;