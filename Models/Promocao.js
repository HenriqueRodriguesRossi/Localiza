const mongoose = require('mongoose')

const Promocao = mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    descricao: {
        type: String, 
        require: true
    },
    dtValidade: {
        type: Date,
        require: true
    }
}, {versionKey: false}) 

module.exports = mongoose.model('Promocao', Promocao) 