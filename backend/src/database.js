const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://localhost/db_test";

mongoose.connect(URI, {

});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("la coneccion a la base de datos se realizo con exito");
});

module.exports = connection;