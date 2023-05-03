const mongoose = require("../DB/ConectionDB");

const bodegaSquema = mongoose.Schema({
        nombre_Bodega:{
            type:'string',
            required:true
        },
        direccion:{
            type:'string'
        },
        capacidad:{
            type:'number'
        },
        telefono:{
            type:'string'
        },
              
    },{
        collection: "Bodegas",
        versionKey: false
    }
);

module.exports = mongoose.model('Bodegas',bodegaSquema);