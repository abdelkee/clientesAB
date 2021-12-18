import { dbConnect } from "../../../../utils/mongoose";
import operation from "../../../../models/operation";
import cliente from "../../../../models/cliente";

dbConnect();

export default async function getOperationsByClient(req, res) {

    const client = await cliente.find({_id: req.query.clientId});
    if(!client) return res.json('failed to load operations of client');
    const clientObj = client[0];
    
    try {
        const operations = await operation.find({cliente: clientObj.name});
        if(!operations) return res.json('failed to load operations of client');
        res.status(200).json(operations);
    } catch (error) {
        res.json({el_error: error.message});
    }
}