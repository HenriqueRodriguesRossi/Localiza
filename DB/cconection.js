const mongoose = require("mongoose");

const connect = ()=>{
    mongoose.connect(`mongodb+srv://Henrique:ha1ERYAPOJ7V8urQ@cluster0.olaz2ih.mongodb.net/?retryWrites=true&w=majority`)

    const connection = mongoose.connection

    connection.on("error", ()=>{
        console.error("Erro ao fazer a conexão no banco de dados!")
    })

    connection.on("open", ()=>{
        console.log("Conectado ao banco de dados com sucesso!")
    })    
}

connect()

module.exports = mongoose