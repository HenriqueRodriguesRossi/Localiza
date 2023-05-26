const mongoose = require('mongoose')

const Esportivo = mongoose.Schema({
    idCarro:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carro',
        require: true
    },
    tp100km:{
        type:Number,
        require: true
    },
    melhorias:{
        type: [String],
        require: false
    }
}, {versionKey:false})

module.exports = mongoose.model('Esportivo', Esportivo)