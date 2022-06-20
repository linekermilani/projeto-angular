const despesaModel = require('../models/despesaModel');

class despesaController {

    async salvar(req, res){
        const max = await despesaModel.findOne({}).sort({id: -1});
        const despesa = req.body;
        despesa.id = max == null ? 1 : max.id + 1;
        const resultado = await despesaModel.create(despesa);
        res.status(201).json(resultado);
    }

    async listar(req, res){
        const resultado = await despesaModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorid(req, res){
        const id = String(req.params.id);
        const resultado = await despesaModel.findOne({'id': id});
        res.status(200).json(resultado);
    }

    async atualizar(req, res){
        const id = req.params.id;
        const _id = (await despesaModel.findOne({'id': id}))._id;    
        await despesaModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res){
        const id = req.params.id;
        const _id = (await despesaModel.findOne({'id': id}))._id;  
        await despesaModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new despesaController();
