const pedidoController = require('../controllers/pedido_controller');
const express = require('express');
const router = express.Router();

router.post('/', pedidoController.salvar);
router.get('/', pedidoController.listar);
router.get('/:id', pedidoController.buscarPorId);
router.put('/:id', pedidoController.atualizar);
router.delete('/:id', pedidoController.excluir);

module.exports = router;
