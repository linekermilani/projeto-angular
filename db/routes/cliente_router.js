const clienteController = require('../controllers/cliente_controller');
const express = require('express');
const router = express.Router();

router.post('/', clienteController.salvar);
router.get('/', clienteController.listar);
router.get('/:id', clienteController.buscarPorid);
router.put('/:id', clienteController.atualizar);
router.delete('/:id', clienteController.excluir);

module.exports = router;
