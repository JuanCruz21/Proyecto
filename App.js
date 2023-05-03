const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const UsuariosRouter = require('./Proyecto/routes/UsuariosRouter');
const BodegasRouter = require('./routes/BodegasRouter');
const app= express();

app.use(cors());
app.use(bodyParser.json());

//Usuarios
app.use("/usuarios", UsuariosRouter);

//Bodegas
app.use("/bodegas", BodegasRouter);

//Demas Modelos

const PORT = process.env.PORT || 5000;
app.listen(PORT);