const express = require('express')
const router = express.Router()
const PromocaoController = require('../Controllers/PromocaoController')

router.post('/promocao', PromocaoController.inserir)
router.get('/promocao', PromocaoController.buscar)

module.exports = router