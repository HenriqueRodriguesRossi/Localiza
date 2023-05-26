const express = require('express')
const router = express.Router()
const FuncionarioController = require('../Controllers/FuncionarioController')

router.post('/funcionario', FuncionarioController.inserir)
router.get('/funcionario', FuncionarioController.buscar)

module.exports = router