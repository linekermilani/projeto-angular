require('./mongodb');

const produtoModel = require('../models/produtoModel');
const produtos = require('./produtos.json');

const despesaModel = require('../models/despesaModel');
const despesas = require('./despesas.json');

const clienteModel = require('../models/clienteModel');
const clientes = require('./clientes.json');

const pedidoModel = require('../models/pedidoModel');
const pedidos = require('./pedidos.json');
const { obj } = require('../models/schemas/produtoSchema');

async function carregarDados() {
  try {

    await produtoModel.deleteMany({});
    for (const produto of produtos) {
      await produtoModel.create(produto);
    }
    console.log("Carga de produtos concluída!");

    await despesaModel.deleteMany({});
    for (const despesa of despesas) {
      await despesaModel.create(despesa);
    }
    console.log("Carga de despesas concluída!");

    await clienteModel.deleteMany({});
    for (const cliente of clientes) {
      await clienteModel.create(cliente);
    }
    console.log("Carga de clientes concluída!");

    await pedidoModel.deleteMany({});
    for (const pedido of pedidos) {
      await clienteModel.findOne({ id: pedido.cliente }).then((cliente) => {
        pedido.cliente = cliente;
      });
      await produtoModel.findOne({ id: pedido.produtos }).then((produtos) => {
        pedido.produtos = produtos;
      });
      await pedidoModel.create(pedido);
    }
    
    console.log("Carga de pedidos concluída!");


  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}

carregarDados();
setTimeout(process.exit, 3000);