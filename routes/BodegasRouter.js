const express = require('express');
const Bodegas = require('../models/Bodega');
const BodegasRouter = express.Router();

//Listar Bodegas
BodegasRouter.get("/", (req,res)=>{
    Bodegas.find()
        .then(datos => res.json({Bodegas:datos}))
        .catch(error=>res.json({mensaje:error}))
});

//Obtener Bodega por id
BodegasRouter.get("/:id", (req,res)=>{
    Bodegas.findById({_id: req.params.id})
        .then(datos=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});

//Guardar Bodega
BodegasRouter.post("/", (req,res)=>{
    console.log(req.body);
    const Bodega = new Bodegas(req.body);
    Bodega.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}))
})

//Modificar Bodega
BodegasRouter.patch("/:id", (req,res)=>{
    const Bodega = new BodegasRouter(req.body);
    Bodegas.updateOne({_id: Bodega._id}, Bodega)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Bodega
BodegasRouter.delete("/:id", (req,res)=>{
    Bodegas.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});


module.exports = BodegasRouter;