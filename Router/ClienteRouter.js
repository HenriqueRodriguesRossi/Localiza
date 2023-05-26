const express = require('express')
const router = express.Router()
const ClienteController = require( '../Controllers/ClienteController')

router.post('/cliente', ClienteController.inserir)
router.get('/client', ClienteController.buscar)

module.exports = router