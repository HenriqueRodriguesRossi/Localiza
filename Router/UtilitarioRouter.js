const express = require('express')
const router = express.Router()
const UtilitarioController = require('../Controllers/UtilitarioController')

router.post('/carro/utilitario', UtilitarioController.inserir)
router.get('/carro/utilitario', UtilitarioController.buscar)

module.exports = router