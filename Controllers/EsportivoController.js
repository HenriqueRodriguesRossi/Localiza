const EsportivoModel = require('../Models/Esportivo');
const Carro = require('../Models/Carro')

module.exports = class EsportivoController{
    static async inserir(req, res){
        console.log(req.body)

        const carro = await CarroModel.findOne({
            placa: req.body.placa
        })

        if(carro.tipo === 'utilitario' || 'Utilitario' ||
        'Utilitário' || 'utilitário'){
            return res.status(400).send('Este carro está cadastrado como utilitário, experimente alterar o tipo do carro!')
        }else{
            const esportivo = new EsportivoModel({
                tp100km: carro.id,
                melhorias: req.body.melhorias
            })
    
            carro.save(carro).then(data=>{
                res.send(data)
            }).catch(error => {
                res.status(500).send({mensagem: error.message || `Erro ao cadastrar o ${esportivo}!`})
            })
        }
    }
    
    static async buscar(req, res){
        console.log(req.body)

        EsportivoModel.findOne({
            placa: req.body.placa
        }).then(data=>{
            res.send(data)
        }).catch(error=>{
            res.status(404).send(`Não foi possível achar 
            um carro esportico com a placa 
            ${EsportivoModel.placa}: `+ error)
        })
    }
}