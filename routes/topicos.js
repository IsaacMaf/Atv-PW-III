const express = require('express');
const router = express.Router();
const Personagem = require('../models/personagem');

// Página principal com todos os personagens
router.get('/', async (req, res) => {
  try {
    const personagens = await Personagem.find({});
    res.render('topicos', {
      title: 'Tópicos de Personagens',
      personagens
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao carregar os personagens.');
  }
});

// ✅ Rotas fixas para cada personagem
router.get('/arc', (req, res) => {
  res.render('topicos/arc', { title: 'Arc' });
});

router.get('/hyro', (req, res) => {
  res.render('topicos/hyro', { title: 'Hyro Takashima' });
});

router.get('/hartreus', (req, res) => {
  res.render('topicos/hartreus', { title: 'Hartreus' });
});

// Rota para dar like
router.post('/like/:id', async (req, res) => {
  try {
    await Personagem.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
    res.redirect('/topicos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao dar like.');
  }
});

// Rota para dar dislike
router.post('/dislike/:id', async (req, res) => {
  try {
    await Personagem.findByIdAndUpdate(req.params.id, { $inc: { dislikes: 1 } });
    res.redirect('/topicos');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao dar dislike.');
  }
});

module.exports = router;
