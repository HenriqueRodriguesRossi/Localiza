const FuncionarioModel = require('../Models/Funcionario');

module.exports = class FuncionarioController {
  static async inserir(req, res) {
    console.log(req.body);

    const novoFuncionario = new FuncionarioModel({
      nome: req.body.nome,
      cpf: req.body.cpf,
      idade: req.body.idade,
      dtNascimento: req.body.dtNascimento,
      telefone: req.body.telefone,
      email: req.body.email,
      endereco: req.body.endereco,
      salario: req.body.salario,
      dtContratacao: req.body.dtContratacao,
      alugueisFeitos: req.body.alugueisFeitos,
      status: req.body.status
    });

    novoFuncionario.save()
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.status(500).send({
          mensagem: `Erro ao cadastrar o funcionário ${novoFuncionario.nome}: ` + error
        });
      });
  }

  static async buscar(req, res){
    console.log(req.body)

    FuncionarioModel.findOne({
      cpf: req.body.cpf
    }).then(data=>{
      res.send(data)
    }).catch(error=>{
      res.status(404).send(`Não foi possível
      achar o funcionário com o CPF 
      ${FuncionarioModel.cpf}: `+error)
    })
  }
};
