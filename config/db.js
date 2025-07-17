const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://isaacramos:IsaacRamos@cluster0.bfe8plk.mongodb.net/isaacrpg', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB conectado com sucesso!'))
.catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));
