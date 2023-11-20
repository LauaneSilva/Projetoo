const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usuarioSchema = Schema({

    id: Number,
    nome: String,
    idade: Number
    
    });
    
    module.exports = mongoose.model("Usuario", usuarioSchema);