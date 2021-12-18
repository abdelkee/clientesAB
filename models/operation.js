import { Schema, model, models } from "mongoose";

const requiredString = {
        type: String,
        required: true,
        trim: true,
}

const operationSchema = new Schema({
    cliente : requiredString,
    tipo: requiredString,
    title: requiredString,
    monto: {
        type: Number,
        required: true,
    },
    modo: requiredString,
}, {timestamps: true});

export default models.operation || model('operation', operationSchema);