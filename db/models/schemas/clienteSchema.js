const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    cpf: String,
    telefone: String
});

module.exports = clienteSchema;