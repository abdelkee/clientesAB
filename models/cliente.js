import { Schema, model, models } from "mongoose";

const clienteSchema = new Schema({
    name : {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {timestamps: true})

export default models.cliente || model('cliente', clienteSchema);