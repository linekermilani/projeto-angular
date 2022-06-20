const produtoController = require('../controllers/produto_controller');
const express = require('express');
const router = express.Router();

router.post('/', produtoController.salvar);
router.get('/', produtoController.listar);
router.get('/:id', produtoController.buscarPorid);
router.put('/:id', produtoController.atualizar);
router.delete('/:id', produtoController.excluir);

module.exports = router;
