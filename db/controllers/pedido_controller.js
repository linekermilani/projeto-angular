const pedidoModel = require('../models/pedidoModel');
const clienteModel = require('../models/clienteModel');
const produtoModel = require('../models/produtoModel');

class pedidoController {

    async salvar(req, res){
        const max = await pedidoModel.findOne({}).sort({id: -1});
        const pedido = req.body;
        pedido.id = max == null ? 1 : max.id + 1;

        const cliente = await clienteModel.findOne({id: pedido.cliente.id});
        pedido.cliente = cliente._id;

        const produto = await produtoModel.findOne({id: pedido.produto.id});
        pedido.produto = produto._id;
        
        const resultado = await pedidoModel.create(pedido);
        res.status(201).send();
    }

    async listar(req, res){
        const resultado = await pedidoModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res){
        const id = String(req.params.id);
        const resultado = await clienteModel.findOne({'id': id});
        res.status(200).json(resultado);
    }
    

    async atualizar(req, res){
        const id = req.params.id;
        const _id = String((await pedidoModel.findOne({'id': id})))._id;

        const pedido = req.body;
        const cliente = await clienteModel.findOne({id: pedido.cliente.id});
        pedido.cliente = cliente._id;

        const produto = await produtoModel.findOne({id: pedido.produto.id});
        pedido.produto = produto._id;
        await pedidoModel.findByIdAndUpdate(String(_id), pedido);
        res.status(200).send();
    }

    async excluir(req, res){
        const id = req.params.id;
        const _id = String((await pedidoModel.findOne({'id': id}))._id);


        
        await pedidoModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new pedidoController();
