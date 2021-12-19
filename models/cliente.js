import { Schema, model, models } from "mongoose";

const requiredString = {
    type: String,
    required: true,
    trim: true,
}

const clienteSchema = new Schema({
    cliente : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    operation : [{
        tipo: requiredString,
        title: requiredString,
        monto: {
            type: Number,
            required: true,
        },
        modo: requiredString,
        operationDate: String
    }]
}, {timestamps: true})

export default models.cliente || model('cliente', clienteSchema);