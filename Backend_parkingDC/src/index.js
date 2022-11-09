const app =require("./app");

async function main(){
    await app.listen(3000);
    console.log("servidor corriendo en el puerto 3000!!")
}
main();