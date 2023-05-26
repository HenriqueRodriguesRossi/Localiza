const express = require('express')
const router = express.Router()
const reservaController = require('../Controllers/ReservaController')

router.post('/reserva', reservaController.inserir)
router.get('/reserva', reservaController.buscar)
router.put('/reserva', reservaController.atualizar)
router.delete('/reserva', reservaController.excluir)

module.exports = router