const mongoose = require("mongoose");

console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {

});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("la coneccion a la base de datos se realizo con exito");
});

module.exports = connection;