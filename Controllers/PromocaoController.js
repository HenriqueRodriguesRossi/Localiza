const PromocaoModel = require('../Models/Promocao')

module.exports = class PromocaoController{
    static async inserir(req, res){
        console.log(req.body)

        const novaProromocao = new PromocaoModel({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            dtValidade: req.body.dtValidade
        })

        novaProromocao.save().then(data=>{
            res.send(data)
        }).catch(error =>{
            res.status(500).send(`Erro ao cadastrar a promocao 
            ${promocao.titulo}: ` + error)
        })
    }

    static async buscar (req, res){
        console.log(req.body)

        PromocaoModel.findOne({
            titulo:req.body.titulo 
        }).then(data=>{
            res.send(data)
        }).catch(error=>{
            res.status(404).send(`Não foi possível achar
            a promoção com o nome 
            ${PromocaoModel.titulo}: `+error)
        })
    }
}