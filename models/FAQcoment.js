const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  texto: { type: String, required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ComentarioFAQ', comentarioSchema);
