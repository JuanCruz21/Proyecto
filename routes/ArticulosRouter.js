const express = require('express');
const Articulos = require('../Models/Articulos');
const ArticulosRouter = express.Router();

//Listar Articulos
ArticulosRouter.get("/", (req,res)=>{
    Articulos.find()
        .then(datos => res.json({Articulos:datos}))
        .catch(error=>res.json({mensaje:error}))
});

//Obtener Articulo por id
ArticulosRouter.get("/:id", (req,res)=>{
    Articulos.findById({_id: req.params.id})
        .then(datos=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});

//Guardar Articulo
ArticulosRouter.post("/", (req,res)=>{
    console.log(req.body);
    const Articulo = new Articulos(req.body);
    Articulo.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}))
})

//Modificar Articulo
ArticulosRouter.patch("/:id", (req,res)=>{
    const Articulo = new ArticulosRouter(req.body);
    Articulos.updateOne({_id: Articulo._id}, Articulo)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Articulo
ArticulosRouter.delete("/:id", (req,res)=>{
    Articulos.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});


module.exports = ArticulosRouter;