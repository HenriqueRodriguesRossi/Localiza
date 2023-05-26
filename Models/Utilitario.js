const mongoose = require('mongoose')

const Utilitario = mongoose.Schema({
    idCarro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        require: true
    },
    qtPassageiros:{
        type: Number,
        require: true
    },
    tmBaguageiro:{
        type: Number,
        require: true
    }, 
    kmLitro:{
        type: Number,
        require: true
    },
    melhorias:{
        type: [String],
        require: false
    }   
}, {versionKey:false})

module.exports = mongoose.model('Utilitario', Utilitario)