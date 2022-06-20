const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    descricao: String,
    preco: Number 
});

module.exports = produtoSchema;