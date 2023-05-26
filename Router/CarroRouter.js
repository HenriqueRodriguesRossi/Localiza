const express = require('express')
const router = express.Router()
const CarroController = require('../Controllers/CarroController')

router.post('/carro', CarroController.inserir)
router.get('/carro', CarroController.buscar)

module.exports = router;