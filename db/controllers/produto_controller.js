const produtoModel = require('../models/produtoModel');

class produtoController {

    async salvar(req, res){
        const max = await produtoModel.findOne({}).sort({id: -1});
        const produto = req.body;
        produto.id = max == null ? 1 : max.id + 1;
        const resultado = await produtoModel.create(produto);
        res.status(201).json(resultado);
    }

    async listar(req, res){
        const resultado = await produtoModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorid(req, res){
        const id = String(req.params.id);
        const resultado = await produtoModel.findOne({'id': id});
        res.status(200).json(resultado);
    }

    async atualizar(req, res){
        const id = req.params.id;
        const _id = (await produtoModel.findOne({'id': id}))._id;    
        await produtoModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res){
        const id = req.params.id;
        const _id = (await produtoModel.findOne({'id': id}))._id;  
        await produtoModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new produtoController();
