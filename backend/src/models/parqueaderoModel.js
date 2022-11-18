const mongoose = require ('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        nombre: { type: String, required: true },
        cuposDisponibles: {type: String, required: true },
        dirección: {type: String, required: true },
        },
);

const parqueaderoSchema = new mongoose.Schema(
{
    nombre: {type: String, required: true },
    dirección: {type: String, required: true },
    slug: {type: String, required: true, unique: true },
    Localidad: {type: String, required: true },
    precioMinutoMoto: {type: Number, required: true},
    precioMinutoCarro: {type: Number, required: true},
    precioTarifaPlenaMoto: {type: Number, required: true},
    precioTarifaPlenaCarro: {type: Number, required: true},
    horario: {type: String, required: true},
    image: {type: String, required: true, unique:true},
    cuposDisponibles: {type: String, required: true},  
    review: [reviewSchema],
},
{
    timestamps: true,
}
);

const parqueadero = mongoose.model('parqueadero', parqueaderoSchema);
module.exports = parqueadero;
