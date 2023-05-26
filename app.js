const express = require("express")
require("./DB/cconection")

//Criando uma aplicação com Express
const app = express()

//Definindo que vamos enviar e receber informações 
//via JSON na requisição
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Iniciando a aplicação
const port = 3000
const host = '0.0.0.0'

app.listen(port, host, ()=>{
    console.log(`Servidor rodando com sucesso na porta ${port}`)
})

//Importanto a rota relacionada ao método POST 
//da aplicação
var carroPostRouter = require('./Router/CarroRouter')
app.use('/', carroPostRouter)

var clienteRouter = require('./Router/ClienteRouter')
app.use('/', clienteRouter)

var esportivoRouter = require('./Router/EsportivoRouter')
app.use('/', esportivoRouter)

var funcionarioRouter = require('./Router/FuncionarioRouter')
app.use('/', funcionarioRouter)

var promocaoRouter = require('./Router/PromocaoRouter')
app.use('/', promocaoRouter)

var utilitarioRouter = require('./Router/UtilitarioRouter')
app.use('/', utilitarioRouter)

var reservaRouter = require('./Router/ReservaRouter')
app.use('/', reservaRouter)