const mongoose = require('mongoose');
const clienteSchema = require('./schemas/clienteSchema');
const produtoSchema = require('./schemas/produtoSchema');

const pedidoSchema = new mongoose.Schema({
    id: Number,
    data: {type: Date, default: Date.now},
    cliente: clienteSchema,
    rua: String,
    numero: Number,
    bairro: String,
    cidade: String,
    produtos: [produtoSchema],
    valor: Number,
});

module.exports = mongoose.model('pedido', pedidoSchema);