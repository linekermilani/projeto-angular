const despesaController = require('../controllers/despesa_controller');
const express = require('express');
const router = express.Router();

router.post('/', despesaController.salvar);
router.get('/', despesaController.listar);
router.get('/:id', despesaController.buscarPorid);
router.put('/:id', despesaController.atualizar);
router.delete('/:id', despesaController.excluir);

module.exports = router;
