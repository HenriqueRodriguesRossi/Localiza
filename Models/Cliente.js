const mongoose = require('mongoose')

const Cliente = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    cpf:{
        type: String,
        require: true
    },
    idade:{
        type: Number,
        require: true
    },
    dtNascimento:{
        type: Date,
        require: true
    },
    telefone:{
        type: Number,
        require: true
    },
    email:{
        type: String,
        require: true
    }, 
    endereco:{
        type: String,
        require: true
    },
    cnh:{
        type: Number,
        require: true
    },
    dtaCNH:{
        type: Date,
        require: true
    },
    fotoCNH:{
        type: Buffer,
        contentType: String,
        require: false
    }
},{versionKey: false})

module.exports = mongoose.model('Cliente', Cliente)