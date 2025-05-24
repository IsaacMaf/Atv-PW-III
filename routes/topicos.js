const express = require('express');
const router = express.Router();

const arc = require('./topicos/arc');
const hartreus = require('./topicos/hartreus');
const hyro = require('./topicos/hyro');

router.get('/', (req, res) => {
  res.render('topicos', { title: 'Tópicos de Personagens' });
});

// Sub-rotas
router.use('/arc', arc);
router.use('/hartreus', hartreus);
router.use('/hyro', hyro);

module.exports = router;