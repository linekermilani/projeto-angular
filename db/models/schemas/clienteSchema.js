const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    cpf: String,
    telefone: String,
    rua: String,
    numero: Number,
    bairro: String, 
    cidade: String
});

module.exports = clienteSchema;