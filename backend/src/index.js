require("dotenv").config();

const app = require("./app");
require("./database");

async function main (){
    app.listen(4500);
    console.log("el servidor esta corriendo en el puerto 4500")
}
