const mongoose = require("../DB/ConectionDB");

const Articulos = mongoose.Schema({
        codigo_Articulos:{
            type:'string',
            required: true,
            unique: true
        },
        nombre_Articulos:{
            type:'string',
            required:true
        },
        descripcion_Articulos:{
            type:'string',
            required:true
        },
        cantidad_Articulos:{
            type:'string'
        },
        fecha_Creacion_Articulo:{
            type:'Date'
        },
        Lugar_Creacion:{
            type:'string',
            required:true
        },
        estado_Articulo:{
            type:'string',
            required:true
        },
        color:{
            type:'string',
            required:true
        },
        precio:{
            type:'string',
            required:true
        },
    },
);

module.exports = mongoose.model('Articulos', Articulos);