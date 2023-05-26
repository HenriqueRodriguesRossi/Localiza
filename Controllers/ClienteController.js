const ClienteModel = require('../Models/Cliente')

module.exports = class ClienteController{
    static async inserir (req, res){
        console.log(req.body)

        const cliente = new ClienteModel({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idade: req.body.idade,
            dtNascimento: req.body.dtNascimento,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: req.body.endereco,
            cnh: req.body.cnh,
            dtaCNH: req.body.dtaCNH,
            fotoCNH: req.body.fotoCNH,
        })

        cliente.save(cliente).then(data=>{
            res.send(data)
        }).catch(error=>{
            res.status(500).send({mensagem: `Não foi possível cadastrar o ${cliente.nome}
            no banco: ` + error})
        })
    }

    static async  buscar(req, res){
        console.log(req.body)

        ClienteModel.findOne({
            cpf: req.body.cpf
        }).then(data=>{
            res.send(data)
        }).catch(error=>{
            res.status(404).send(`Não foi possível achar
            clinte com o CPF ${ClienteModel.cpf}: ` +error)
        })
    }
}