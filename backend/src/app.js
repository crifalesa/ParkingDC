const express = require("express");
const cors = require("cors");
const datafull =require('../data.json');
const app = express();

app.get ('/api/parqueaderos', (req, res) =>{
    res.send(datafull.parqueaderos);
}) 

//configuraciones
app.set("port", 4500);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/usuarios", (req, res) => res.send("ruta de usuarios"));

module.exports = app;
