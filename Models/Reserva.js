const mongoose = require('mongoose')

const Reserva = mongoose.Schema({
    placaCarro:{
        type: String,
        ref: 'Carro',
        require: true
    },
    cpfCliente:{
        type: Number,
        ref: 'Cliente',
        require: true
    },
    status:{
        type: Boolean,
        require: true
    },
    dtInicio:{
        type: Date,
        require: true
    },
    dtFim:{
        type: Date,
        require: true
    }
}, {versionKey: false})

module.exports = mongoose.model('Reserva', Reserva)