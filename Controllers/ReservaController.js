const ReservaModel = require('../Models/Reserva');

module.exports = class ReservaController {
    static async inserir(req, res) {
        const reserva = await ReservaModel.findOne({
            placaCarro: req.body.placaCarro,
        });

        const novaReserva = new ReservaModel({
            placaCarro: req.body.placaCarro,
            cpfCliente: req.body.cpfCliente,
            status: req.body.status,
            dtInicio: req.body.dtInicio,
            dtFim: req.body.dtFim,
        });

        novaReserva
            .save()
            .then(data => {
                res.send(data);
            })
            .catch(error => {
                res.status(500).send({ mensagem: `Não foi possível fazer uma reserva: ${error}` });
            });
    }

    static async buscar(req, res) {
        try {
          console.log(req.body);
          const data = await ReservaModel.findOne({
            placaCarro: req.body.placaCarro,
          });
      
          if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              mensagem: `${req.body.placaCarro} não foi encontrada no sistema`
            });
          }
        } catch (error) {
          res.status(500).send({
            mensagem: `Erro ao buscar reserva: ${error}`
          });
        }
      }      

    static async atualizar(req, res){
        ReservaModel.findByIdAndUpdate({
            placaCarro: req.body.placaCarro
        }, {useFindAndModify: false}).then(data=>{
            if(!data){
                res.status(404).send({
                    mensagem: "Não consegui achar um carro com essa placa"
                })
            }else{
                res.send({mensagem: `Reserva foi atualziado com 
                sucesso`})
            }
        }).catch(error=>{
            res.status(500).send({mensagem:
        `Erro ao tentear atualizar os dados da reserva 
        ${ReservaModel.titulo}: ` + error})
        })
    }

    static async excluir(req, res) {  
    ReservaModel.findOneAndRemove({
        placaCarro:req.body.placaCarro
    }).then(data => {
        res.send({ mensagem: `Reserva de id ${id} excluída com sucesso!` });
      })
      .catch(error => {
        res.status(500).send({
          mensagem: `Não consegui achar uma 
          reserva com esse id`
        });
      });   
    }
};
