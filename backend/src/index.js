require("dotenv").config();

const app = require("./app");
require("./database");

async function main (){
    app.listen(app.get("port"));
    console.log("el servidor esta corriendo en el puerto " + app.get("port"));
}
main();