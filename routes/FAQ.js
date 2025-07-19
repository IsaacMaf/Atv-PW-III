const express = require('express');
const router = express.Router();
const ComentarioFAQ = require('../models/FAQcoment'); // Importa o model

// Rota GET - renderiza a FAQ com comentários
router.get('/', async function(req, res, next) {
  try {
    const comentarios = await ComentarioFAQ.find().sort({ data: -1 }).limit(20);
    res.render('FAQ', { title: "Perguntas Frequentes", comentarios });
  } catch (error) {
    console.error("Erro ao buscar comentários:", error);
    res.render('FAQ', { title: "Perguntas Frequentes", comentarios: [] });
  }
});

// Rota POST - recebe novo comentário
router.post('/comentarios', async (req, res) => {
  const { nome, texto } = req.body;
  try {
    await ComentarioFAQ.create({ nome, texto });
    res.redirect('/FAQ');
  } catch (error) {
    console.error("Erro ao salvar comentário:", error);
    res.redirect('/FAQ');
  }
});

module.exports = router;
