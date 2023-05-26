const UtilitarioModel = require('../Models/Utilitario');
const Carro = require('../Models/Carro');

module.exports = class UtilitarioController {
  static async inserir(req, res) {
    console.log(req.body);

    const carro = await Carro.findOne({
      placa: req.body.placa
    });

    const utilitario = new UtilitarioModel({
        idCarro: carro._id,
        qtPassageiros: req.body.qtPassageiros,
        tmBaguageiro: req.body.tmBaguageiro,
        kmLitro: req.body.kmLitro,
        melhorias: req.body.melhorias
      });
  
      utilitario.save(utilitario)
        .then(data => {
          res.send(data);
        })
        .catch(error => {
          res.status(500).send({ mensagem: error.message || `Não foi possível cadastrar o ${utilitario}!` });
        });
    } 

    static async buscar (req, res){
      console.log(req.body)

      UtilitarioModel.findOne({
        placa: req.body.placa
      }).then(data=>{
        res.send(data)
      }).catch(error=>{
        res.status(404).send(`Não foi possível achar o 
        utilitário com a placa ${UtilitarioModel.placa}: `
        + error)
      })
    }
};
