const CarroModel = require('../Models/Carro')

module.exports = class CarroController{
    static async inserir(req, res){
        console.log(req.body)
        
        const carro = new CarroModel({
            placa: req.body.placa,
            ano: req.body.ano,
            modelo: req.body.modelo,
            tipo: req.body.tipo,
            quilometragem: req.body.quilometragem,
            diaria: req.body.diaria,
            observacao: req.body.observacao
        })

        carro.save(carro).then(data=>{
            res.send(data)

            console.log(`O carro ${carro.modelo} foi cadastrado com sucesso!`)
        }).catch(error =>{
            res.status(500).send({mensagem: error.message || `Erro ao cadastrar o ${carro}!`})
            
        })
    }

    static async buscar (req, res){
        console.log(req.body)

        CarroModel.findOne({
            placa: req.body.placa
        }).then(data=>{
            res.send(data)
        }).catch(error=>{
            res.status(404).send(`Não foi possível
            encontrar o carro com a placa ${CarroModel.placa}: `
            +error)
        })
    }
}