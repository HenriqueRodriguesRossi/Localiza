const express = require('express')
const router = express.Router()
const EsportivoController = require('../Controllers/EsportivoController')

router.post('/carro/esportivo', EsportivoController.inserir)
router.get('/carro/esportivo', EsportivoController.buscar)

module.exports = router
